require('dotenv').config()

const app = require('express')()

const https = require('https')

const fse = require('fs-extra')

const secureServer = https.createServer({
    key: fse.readFileSync("/home/jgoolsby/SSR/portfolio/ssl/privkey.pem"),
    cert: fse.readFileSync("/home/jgoolsby/SSR/portfolio/ssl/fullchain.pem")
}, app)

const io = require('socket.io')(secureServer);

const next = require('next')

const dev = process.env.NEXT_PUBLIC_APP_ENV !== 'production'

const nextApp = next({ dev })

const nextHandler = nextApp.getRequestHandler();

var socketEvents = require('./server-util/socketEvents')

io.on('connection', (socket) => {
    console.log('socket connected success ')

})

let port = 3101

nextApp.prepare().then(() => {

    app.get('*', (req, res) => {
        return nextHandler(req, res)
    })

    // app.use(morgan('combined', { stream: winston.stream }));

    app.use(function (err, req, res, next) {

        // set locals, only providing error in development
        // res.locals.message = err.message;
        // res.locals.error = req.app.get('env') === 'development' ? err : {};

        // add this line to include winston logging
        // winston.error(`${err.status || 500} - ${err.message} - ${req.originalUrl} - ${req.method} - ${req.ip}`);

        // render the error page
        res.status(err.status || 500)
        res.render('error');
    });

    app.post('*', (req, res) => {
        return nextHandler(req, res)
    })

    secureServer.listen(port, (err) => {
        if (err) throw err
        console.log(`Server listening of port ${port}`)
    })

})
