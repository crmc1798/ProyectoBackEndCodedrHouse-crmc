const userModel = require("../../models/user.model");


class UserManager{
    createUser = async (newUser) => {
        try {
            const user = await userModel.create(newUser);
            //console.log(user);

            return user;

            //return newUser;
        } catch (error) {
            throw new Error(error)
        }
    }

    addCartToUser = async (uid, cid) => {
        try {
            const response = await userModel.findOneAndUpdate({ _id: uid }, {cart: cid})
            //console.log(user);

            return response;

            //return newUser;
        } catch (error) {
            console.log(error);
            throw new Error(error)
        }
    }

    findUser = async(user) => {
        try {
            const response = await userModel.findOne({email: user})
            return response;
        } catch (error) {
            throw new Error(error)
        }
    }


    findByID = async(id) => {
        try {
            const response = await userModel.findById(id)
            return response;
        } catch (error) {
            throw new Error(error)
        }
    }

    updatePassword = async(email, newPassword) => {
        try {
            const response = await userModel.findOneAndUpdate({ email }, { password: newPassword })
            return response;
        } catch (error) {
            throw new Error(error)
        }
    }

    updateRole = async(email, newRole) => {
        try {
            const response = await userModel.findOneAndUpdate({ email }, { role: newRole })
            return response;
        } catch (error) {
            throw new Error(error)
        }
    }

    updateConnection = async( _id, new_connection) => {
        try {
            const response = await userModel.findOneAndUpdate({ _id }, { last_connection: new_connection })
            return response;
        } catch (error) {
            throw new Error(error)
        }
    }

    findAll = async() => {
        try {
            const response = await userModel.find({}, { first_name: 1, email: 1, role: 1, last_connection: 1, _id: 1})
            return response;
        } catch (error) {
            throw new Error(error)
        }
    }

    delete = async (_id) => {
        try {
            const response = await userModel.deleteOne({_id})
            //console.log(response);
            return response;
        } catch (error) {
            throw new Error(error)
        }
    }

}

module.exports = {UserManager};