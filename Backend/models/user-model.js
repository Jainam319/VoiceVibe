const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const userSchema = new Schema({
    phone: { type: String, required: true },
    activated: { type: Boolean, required: false, default: false }
}, {
    timestamps: true
});

module.exports = mongoose.model('User', userSchema, 'users')   // 3rd para for which name we want to create collection