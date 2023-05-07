export class UsersController {
    static async getUsers(req, res, next) {
        try {
            res.send('OK')
        }
        catch (err) {
            next(err)
        }
    }

    static async getUserById(req, res, next) {
        try {
            res.send('OK')
        }
        catch (err) {
            next(err)
        }
    }

    static async createUser(req, res, next) {
        try {
            res.send('OK')
        }
        catch (err) {
            next(err)
        }
    }


}