const UserModel = require("../models/user-model");

class UserService{
    // check for the user is there or not
    async findUser(filter){
        const user = await UserModel.findOne(filter);  // filter means on which basis you want to find user
        return user;
    }
    async createUser(data){
        const user = await UserModel.create(data)
        return user;
    }
}

module.exports = new UserService();