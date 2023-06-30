class UserRepository {
    constructor(dao) {
        this.dao = dao
    }

    createUser = async (newUser) => {
        try {
            const user = await this.dao.createUser(newUser);
            return user;
        } 
        catch (error) {
            return logger.error(`something went wrong ${error}`);
        }
    }

    findAll = async () => {
        try {
            const response = await this.dao.findAll();
            return response;
        } 
        catch (error) {
            return logger.error(`something went wrong ${error}`);
        }
    }

    findUser = async (email) => {
        try {
            const response = await this.dao.findUser(email)
            return response;
        } 
        catch (error) {
            return logger.error(`something went wrong ${error}`);
        }
    }

    findById = async (id) => {
        try {
            const result = await this.dao.findById(id);
            return result;
        } 
        catch (error) {
            return logger.error(`something went wrong ${error}`);
        }
    }

    updateUser = async (email, newPassword) => {
        try {
            await this.dao.updateUser(email, newPassword)
        } 
        catch (error) {
            return logger.error(`something went wrong ${error}`);
        }
    }
}

module.exports = UserRepository;