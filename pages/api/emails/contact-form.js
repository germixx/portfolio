const transporter = require('../../../server-util/mail.js');

function contactForm(name, email, subject, message, res) {

    let mailOptions = {
        from: 'Contact Form <hello@jgoolsby.com>',
        to: `jeremygoolsby@outlook.com`,
        subject: `Contact Form: ${subject}`,
        html: `${message}<br/><br/>
        From: ${email}`,
    }

    transporter.sendMail(mailOptions, function (err, info) {
        if (err) throw err;
    });

    res.send({ status: true });

}

export default (req, res) => {

    const { method } = req;

    let name = req.body.emailName;
    let email = req.body.emailAddress;
    let subject = req.body.subject;
    let message = req.body.messagez;

    switch (method) {
        case 'GET':
            break
        case 'POST':
            contactForm(name, email, subject, message, res)
            break
        case 'UPDATE':
            break;
        case 'DELETE':
            break;
        default:
            res.setHeader('Allow', ['POST'])
            res.status(405).end(`Method ${method} Not Allowed`)
            res.end()
    }

}
