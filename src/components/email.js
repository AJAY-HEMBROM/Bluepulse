import nodemailer from 'nodemailer';

// Function to send email notification
export async function sendEmail(email, subject, text) {
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
      to: email,
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

// Function to send sign-up email
export async function sendSignUpEmail(email, userDetails) {
  const subject = 'Welcome to Our Application!';
  const message = `
    Dear ${userDetails.name},
    
    Thank you for signing up with our application. Here are your sign-up details:
    
    Email: ${email}
    Password: ${userDetails.password}
    
    Feel free to reach out if you have any questions.
    
    Best regards,
    Your Application Team
  `;

  await sendEmail(email, subject, message);
}
