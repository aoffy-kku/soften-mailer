'use strict';
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();

app.use(bodyParser.json());

app.get('/resetfail', function (req, res) {
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
  res.send('Reset failed.');
});

app.get('/resetsuccess', function (req, res) {
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
    subject: `เปลี่ยนแปลงรหัสผ่านบัญชี`, // Subject line
    text: `บัญชีของคุณถูกเปลี่ยนรหัสผ่านการใช้งานเรียบร้อยแล้ว หากพบปัญหากรุณาติดต่อผู้ดูแลระบบ`, // plain text body
    html: `<b>บัญชีของคุณถูกเปลี่ยนรหัสผ่านการใช้งานเรียบร้อยแล้ว หากพบปัญหากรุณาติดต่อผู้ดูแลระบบ</b>` // html body
  };

  transporter.sendMail(mailOptions, function (err, info) {
    if (err)
      console.log(err);
    else
      console.log(info);
  });
  console.log(req);
  res.send('Reset Success.');
});

app.get('/registerfail', function (req, res) {
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
    subject: `การสมัครสมาชิกล้มเหลว`, // Subject line
    text: `บัญชีของคุณถูกถูกตรวจสอบว่ามีข้อมูลไม่ถูกต้อง ซ้ำ หรือถูกแอบอ้าง กรุณาติดต่อผู้ดูแลระบบ`, // plain text body
    html: `<b>บัญชีของคุณถูกถูกตรวจสอบว่ามีข้อมูลไม่ถูกต้อง ซ้ำ หรือถูกแอบอ้าง กรุณาติดต่อผู้ดูแลระบบ</b>` // html body
  };

  transporter.sendMail(mailOptions, function (err, info) {
    if (err)
      console.log(err);
    else
      console.log(info);
  });
  console.log(req);
  res.send('Register Failed.');
});

app.get('/registersuccess', function (req, res) {
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
    subject: `การสมัครสมาชิกเสร็จสมบูรณ์`, // Subject line
    text: `บัญชีของคุณถูกถูกตรวจสอบและได้รับการยืนยันจากผู้ดูแลระบบแล้ว สามารถใช้งานในการเข้าสู่ระบบได้ หากพบปัญหากรุณาติดต่อผู้ดูแลระบบ`, // plain text body
    html: `<b>บัญชีของคุณถูกถูกตรวจสอบและได้รับการยืนยันจากผู้ดูแลระบบแล้ว สามารถใช้งานในการเข้าสู่ระบบได้ หากพบปัญหากรุณาติดต่อผู้ดูแลระบบ</b>` // html body
  };

  transporter.sendMail(mailOptions, function (err, info) {
    if (err)
      console.log(err);
    else
      console.log(info);
  });
  console.log(req);
  res.send('Register Success.');
});

app.get('/', function (req, res) {
  res.send("ระบบส่งอีเมลของ No More Bug powered by nodemailer");
});

app.listen(process.env.PORT || 8080, () => console.log('Mailer is running!'));