
const nodemailer = require('nodemailer');
const conf = require('../config/conf');


function sendEmail(data) {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: conf.user,
            pass: conf.pass
        }
    });

    var dishList = data.orderDetails.map(dish => {
        return `
        <tr>
        <td style="border:1px solid black;padding:10px;margin-right:20px">${dish.name} $${dish.price}</td>
        </tr>
        `
    }).join('');

    var mailOptions = {
        from: 'fooderPlaceCom@gmail.com',
        to: data.userDetails.email,
        subject: 'Your Order From FooderPlace.com',
        html: `
        <h2>Hi ${data.userDetails.firstName}, we are preparing your order!</h2>
        ${dishList}
        <p>The total charge is - $${data.totalPrice}</p>
        <p>Thank you for using our service, hope to see you soon again!</p>
        <p>fooderPlace.com</p>
        `
    };

    transporter.sendMail(mailOptions, function (err, info) {
        if (err) {
            console.log(err);
        }
        else {
            console.log('Email sent: ' + info.response);
        }
    })
}

module.exports = {
    sendEmail
}