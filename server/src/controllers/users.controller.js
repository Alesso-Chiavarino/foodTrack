import { UsersService } from "../services/users.service.js"
import { HTTP_STATUS, successResponse } from "../utils/api.utils.js"

const usersService = new UsersService()
export class UsersController {
    static async getUsers(req, res, next) {
        try {
            const users = await usersService.getUsers()
            const res = successResponse(users)
            res.status(HTTP_STATUS.OK).json(res)
        }
        catch (err) {
            next(err)
        }
    }

    static async getUserById(req, res, next) {
        try {
            const { id } = req.params
            const user = await usersService.getUserById(id)
            const res = successResponse(user)
            res.status(HTTP_STATUS.OK).json(res)
        }
        catch (err) {
            next(err)
        }
    }

    static async createUser(req, res, next) {
        try {
            const userPayload = req.body
            const newUser = await usersService.createUser(userPayload)
            const res = successResponse(newUser)
            res.status(HTTP_STATUS.CREATED).json(res)
        }
        catch (err) {
            next(err)
        }
    }


}