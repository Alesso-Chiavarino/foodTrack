export class OrdersController {
    static async getOrders(req, res, next) {
        try {
            res.send('OK')
        }
        catch (err) {
            next(err)
        }
    }

    static async getOrderById(req, res, next) {
        try {
            res.send('OK')
        }
        catch (err) {
            next(err)
        }
    }

    static async createOrder(req, res, next) {
        try {
            res.send('OK')
        }
        catch (err) {
            next(err)
        }
    }

    static async resolveOrder(req, res, next) {
        try {
            res.send('OK')
        }
        catch (err) {
            next(err)
        }
    }


}