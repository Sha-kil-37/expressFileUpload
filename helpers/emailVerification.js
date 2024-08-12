const nodemailer = require("nodemailer");
//
async function sendEmail(email) {
  const transporter = nodemailer.createTransport({
    service: "gmail.com",
    auth: {
      user: "sakildevmern@gmail.com",
      pass: `${process.env.EMAIL_PASSWORD}`,
    },
  });
  //
  const info = await transporter.sendMail({
    from: "sakil", // sender address
    to: email, // list of receivers
    subject: "web app testing ", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });
  //
}

module.exports = sendEmail;
