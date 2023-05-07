export class BusinessesController {
    static async getBusinesses(req, res, next) {
        try {
            res.send('OK')
        }
        catch (err) {
            next(err)
        }
    }

    static async getBusinessById(req, res, next) {
        try {
            res.send('OK')
        }
        catch (err) {
            next(err)
        }
    }

    static async createBusiness(req, res, next) {
        try {
            res.send('OK')
        }
        catch (err) {
            next(err)
        }
    }

    static async addProductToBusiness(req, res, next) {
        try {
            res.send('OK')
        }
        catch (err) {
            next(err)
        }
    }


}