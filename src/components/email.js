import nodemailer from 'nodemailer';

// Function to send email notification
export async function sendEmail(subject, text) {
  try {
    // Create a nodemailer transporter
    let transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: 'ajayhembromofficial2001@gmail.com',
        pass: 'anyckezmzntiqric'
      }
    });

    // Define email options
    let mailOptions = {
      from: 'ajayhembromofficial2001@gmail.com',
      to: 'ajayhembrom1395@gmail.com',
      subject: subject,
      text: text
    };

    // Send the email
    let info = await transporter.sendMail(mailOptions);
    console.log('Email sent: ', info.messageId);
  } catch (error) {
    console.error('Error sending email: ', error);
  }
}
