var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
	service: "gmail",
	auth: {
	user: 'maidiep2610@gmail.com',
	pass: '**********'
	}

});

var mailOptions = {
	from: 'maidiep2610@gmail.com',
	to: ["maidiep.ptit@gmail.com", "maidiep2610@gmail.com"],
	subject: "Sending an Email using Node.js",
	text: "That was easy!"

};

transporter.sendMail(mailOptions, function(error, info){
	if (error){
		console.log(error);
	} else {
		console.log("Email sent: " + info.response);
	}

});
