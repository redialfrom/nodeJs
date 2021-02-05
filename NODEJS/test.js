const nodemailer = require('nodemailer');
const email = {
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "c7c89aa00b2ccb",
          pass: "90b9cd2a474816"
        }
};

const send = async (option) => {
    nodemailer.createTransport(email).sendMail(option, (error, info) => {
        if(error) {
            console.log(error);
        }
        else {
            console.log(info);
            return info.response;
        }
    });
};

let data = {
    from: 'redialfrom@daum.net',
    to: 'redialfrom@daum.net',
    subject: 'this is test mail',
    text: 'node js 한 시간 만에 끝내보자3'
};

send(data);