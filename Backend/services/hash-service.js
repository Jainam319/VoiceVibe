const crypto = require('crypto');

class HashSercice{

    // inplace of data otp will come
    hashOtp(data){
        return crypto.createHmac('sha256',process.env.HASH_SECRET).update(data).digest('hex')
    }
}

module.exports = new HashSercice();