#WARNING: This project is a work in progress. Please do not use this in production

ncrashreporter
==============

Crash Reporter for Nodejs. Sends an email when the app is crashed via Postmark (https://postmarkapp.com/)

## Installing crashreporter

```
[sudo] npm install [-g] ncrashreporter
```

## Usage
### Basic
```javascript
var opts = {
    pmKey: 'POSTMARK_API_KEY',
    mailFrom: 'mailfrom@example.com',
    mailTo: 'mailto@example.com'
}
require('ncrashreporter').GetCrashReport(opts);
```