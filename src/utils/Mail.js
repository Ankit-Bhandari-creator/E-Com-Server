const nodemailer = require('nodemailer')
const Email = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: "ankitbhandari145@gmail.com",
        password: "gqdmxprcmknhhkuv"
    }
})
async function sendMail(to, subject, body) {
    const info = await Email.sendMail({
        from: '"KICK SHOES 👟" <ankitbhandari145@gmail.com>',
        to: `${to}`,
        subject: `${subject}`,
        html: `${body}`
    })

    console.log("Message sent:%s", info.messageId)
}

module.exports = sendMail