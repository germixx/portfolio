var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    host: 'smtp.migadu.com',
    port: 587,
    secure: false,
    tls: {
        rejectUnauthorized: false,
    },
    auth: {
        user: 'hello@jgoolsby.com',
        pass: 'Rockon123!'
    }
});

module.exports = transporter;
