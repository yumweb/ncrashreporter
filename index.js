module.exports = {
    GetCrashReport: function (opts) {
        var postmark = require('postmark');
        var client = new postmark.Client(opts.pmKey);
        var moment = require('moment');
        process.on('uncaughtException', function (error) {
            console.log(error.stack)
            var mailOpts = {
                "From": opts.mailFrom,
                "To": opts.mailTo,
                "Subject": 'Nodejs App Crash Report ' + moment().format('DD-MM-YYYY HH:mm:ss'),
                "TextBody": "Dear Team\n\n Attached is daily sales report",
                "HtmlBody": error.stack
            }
            client.sendEmail(mailOpts, function (err) {
                if (err) {
                    console.log(err)
                } else {
                    process.exit(1);
                }
            });
        });
    }
}