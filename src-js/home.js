const util = require('./util')

function notificationRegister(email) {
    util.log('User registered for notifications: ' + email)
    // send notification HTTP request
}

notificationRegister('domemacintosh@gmail.com')