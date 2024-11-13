//อีเมลและรหัสผ่านเป็นแค่ตัวอย่างเท่านั้น


const nodemailer = require('nodemailer');

// สร้าง transporter สำหรับส่งอีเมล
let transporter = nodemailer.createTransport({
  service: 'gmail', // สามารถใช้บริการอีเมลอื่นได้ เช่น 'smtp.mailtrap.io', 'smtp.office365.com', เป็นต้น
  auth: {
    user: 'adadada@gmail.com', // ใส่อีเมลของคุณ
    pass: 'juhygtfrdeswqaik'    // ใส่รหัสผ่านแอปไม่ต้องวรรค
  }
});

// ตั้งค่าข้อมูลอีเมล
let mailOptions = {
  from: 'adadada@gmail.com', // ใส่อีเมลของคุณ
  to: 'hufnhd@gmail.com', // ใส่อีเมลผู้รับ
  subject: 'Test', // หัวข้ออีเมล
  text: 'Start Test.' // เนื้อหาของอีเมล
};

// ส่งอีเมล
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log('Error occurred:', error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
