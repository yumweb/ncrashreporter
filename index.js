module.exports = {
    GetCrashReport: function () {
        var nodemailer = require('nodemailer');
        var ses = require('nodemailer-ses-transport');
        var moment = require('moment');
        process.on('uncaughtException', function (error) {
            console.log(error.stack);
            var transporter = nodemailer.createTransport(ses({
                accessKeyId: AWS_ACCESS_KEY,
                secretAccessKey: AWS_SECRET_KEY
            }));
            var mailOptions = {
                from: FROM_EMAIL,
                to: 'sameer@yumweb.com',
                subject: 'API Crash Report ' + moment().format('DD-MM-YYYY HH:mm:ss'),
                html: error.stack
            };
            transporter.sendMail(mailOptions, function (err, info) {
                process.exit(0);
            });
        });
    }
}