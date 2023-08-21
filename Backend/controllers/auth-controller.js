const otpService = require('../services/otp-service')
const hashService = require('../services/hash-service');
const userService = require('../services/user-service')
const tokenService = require('../services/token-service')

class AuthController {

    async sendOtp(req, res) {
        const { phone } = req.body;

        if (!phone) {
            res.status(400).json({ message: "Phone field is required" })
        }

        // generate otp
        const otp = await otpService.generateOtp();

        const ttl = 1000 * 60 * 10;   // 10 min
        const expires = Date.now() + ttl;
        const data = `${phone}.${otp}.${expires}`;
        console.log(data);

        // hash otp
        const hash = hashService.hashOtp(data);

        // send otp
        try {
            await otpService.sendBySms(phone, otp)
            res.json({
                hash: `${hash}.${expires}`,
                phone
            })
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: "message sending failed" });
        }

        // res.status(200).json({ hash });   
    }

    async verifyOtp(req, res) {

        // Check user enterd all the fields
        const { otp, hash, phone } = req.body;
        if (!otp || !hash || !phone) {
            res.status(400).json({ message: "All fields are required" })
        }

        // whichever hash we got we seperate expires from the hash
        const [hashedOtp, expires] = hash.split('.');

        // check for the expire of the otp
        if (Date.now() > +expires) {           // By default expires will be in string so we convert explicitly in numbers using +
            res.status(400).json({ message: "OTP expired!" })
        }

        //If OTP is not expired then
        const data = `${phone}.${otp}.${expires}`;     // hash data

        // compare hashedOtp and otp is same or not
        const isValid = otpService.verifyOtp(hashedOtp, data);

        if (!isValid) {
            res.status(400).json({ message: "Invalid OTP" })
        }

        // If valid
        let user;
        // let accessToken;     //in this we will put the user's data but first we need to create USER 

        try {
            user = await userService.findUser({ phone: phone })    // 1st for database and 2nd for user's phone
            if (!user) {
                user = await userService.createUser({ phone })
            }
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: "Db error" })
        }

        //Token 
        const { accessToken, refreshToken } = tokenService.generateTokens({ _id: user._id, activated: false })
        // we will store accessToken in local storage and refreshToken in cookies

        // create cookies as refreshtoken and setting up it's value
        res.cookie('refreshtoken', refreshToken, {
            maxAge: 1000 * 60 * 60 * 24 * 30,  // 1 month
            httpOnly: true   // js are not able to read only server can read it
        });

        res.json({ accessToken })
    }
}

module.exports = new AuthController();   // Object create kri ne pass krsu jyare require kesu tyare same object mlse [Singleton Pattern]