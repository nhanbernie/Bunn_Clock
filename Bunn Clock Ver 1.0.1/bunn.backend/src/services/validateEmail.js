// import nodemailer from 'nodemailer';


// // Cấu hình Nodemailer
// const transporter = nodemailer.createTransport({
//     host: 'smtp.gmail.com',
//     port: 465,
//     secure: true,
//     auth: {
//         type: 'login',
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS,
//     },
//     tls: {
//         rejectUnauthorized: false,
//     },
//     debug: true,
//     logger: true,
// });

// const verificationLink = `${process.env.BASE_URL}/api/users/verify-email?token=${verificationToken}`;

// transporter.verify((error, success) => {
//     if (error) {
//         console.error('SMTP connection error:', error);
//     } else {
//         console.log('SMTP server is ready to send emails');
//     }
// });



// // Gửi email xác minh
// await transporter.sendMail({
//     from: process.env.EMAIL_USER,
//     to: email,
//     subject: 'Email Verification',
//     html: `<p>Hello ${name},</p>
//              <p>Please verify your email by clicking the link below:</p>
//              <a href="${verificationLink}">${verificationLink}</a>`,
// });


// // Xác minh email
// export const verifyEmail = async (req, res) => {
//     const { token } = req.query;

//     if (!token) {
//         return res.status(400).json({ message: 'Verification token is required' });
//     }

//     try {
//         // Giải mã token
//         const decoded = jwt.verify(token, process.env.JWT_SECRET);

//         const user = await User.findById(decoded.id);

//         if (!user) {
//             return res.status(400).json({ message: 'Invalid token or user not found' });
//         }

//         if (user.isVerified) {
//             return res.status(400).json({ message: 'Email already verified' });
//         }

//         user.isVerified = true;
//         await user.save();

//         res.status(200).json({ message: 'Email verified successfully' });
//     } catch (error) {
//         console.error('Error verifying email:', error);

//         if (error.name === 'TokenExpiredError') {
//             return res.status(400).json({ message: 'Verification token has expired' });
//         }

//         res.status(500).json({ message: 'Invalid or expired token' });
//     }
// };