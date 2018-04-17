'use strict';
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();

app.use(bodyParser.json());

app.get('/ban', function (req, res) {
  const data = req.query;
  // create reusable transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'mailer.nmb@gmail.com',
      pass: '$uper$ecret'
    }
  });

  // setup email data with unicode symbols
  const mailOptions = {
    from: '"no-replay" <mailer.nmb@gmail.com>', // sender address
    to:  data.receiver, // list of receivers
    subject: `ระงับการใช้งานบัญชี`, // Subject line
    text: `บัญชีของคุณถูกระงับการใช้งาน เนื่องจากกรอกคำถามกันลืมผิดติดต่อกัน 3 ครั้ง กรุณาติดต่อผู้ดูแลระบบ`, // plain text body
    html: `<b>บัญชีของคุณถูกระงับการใช้งาน เนื่องจากกรอกคำถามกันลืมผิดติดต่อกัน 3 ครั้ง กรุณาติดต่อผู้ดูแลระบบ</b>` // html body
  };

  transporter.sendMail(mailOptions, function (err, info) {
    if (err)
      console.log(err);
    else
      console.log(info);
  });
  console.log(req);
  res.send('Banned');
});

app.get('/', function (req, res) {
  res.send("I am Mailer! Give me 3000 point then i will send your email.");
});

app.listen(process.env.PORT || 8080, () => console.log('Mailer is running!'));