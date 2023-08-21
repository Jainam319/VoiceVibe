const crypto = require('crypto');
const smsSid = process.env.SMS_SID;
const smsAuthToken = process.env.SMS_AUTH;
const twilio = require('twilio')(smsSid,smsAuthToken,{
    lazyLoading: true
});
const hashService = require('./hash-service');


class otpService {

    async generateOtp() {
        const otp = crypto.randomInt(1000, 9999);
        return otp;
    }

    async sendBySms(phone,otp) {
        return await twilio.messages.create({
            to: phone,
            from: process.env.SMS_FROM_PHONE,
            body: `Your VoiceVibe verification code is: ${otp}`
        })
    }
    verifyOtp(hashedOtp,data) {
        let computedHash = hashService.hashOtp(data);    // now data is in hash form

        return computedHash === hashedOtp;     // if true then return true else return false
     }
}

module.exports = new otpService();