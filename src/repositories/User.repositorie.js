class UserRepository{
    constructor(dao){
        this.dao = dao
    }

    createUser = async (newUser) => {
        try {
            const user = await this.dao.createUser(newUser);
            return user;
        } catch (error) {
            throw new Error(error)
        }
    }

    findAll = async() => {
        try {
            const response = await this.dao.findAll();
            return response;
        } catch (error) {
            throw new Error(error)
        }
    }
    
    findUser = async(email) => {
        try {
            const response = await this.dao.findUser(email)
            return response;
        } catch (error) {
            throw new Error(error)
        }
    }

    findById = async(id) => {
        try {
            const result = await this.dao.findById(id);
            return result;            
        } catch (error) {
            throw new Error(error)
        }
    }

    updateUser = async(email, newPassword) => {
        try {
            await this.dao.updateUser(email, newPassword)
        } catch (error) {
            throw new Error(error)
        }
    }
}

module.exports = UserRepository;