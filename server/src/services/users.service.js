import { getDAOS } from "../models/daos/index.js";
import { HttpError, HTTP_STATUS } from "../utils/HttpError.js";

const { usersDAO } = getDAOS()

export class UsersService {
    async getUsers(){
        const users = await usersDAO.getUsers()
        return users
    }
    async getUserById(id){
        if(!id) {
            throw new HttpError('No user ID provided', HTTP_STATUS.BAD_REQUEST)
        }
        const user = await usersDAO.getUserById(id)
        if(!user){
            throw new HttpError(`User with ID ${id} not found`, HTTP_STATUS.NOT_FOUND)
        }
        return user
    }
    async createUser(payload){

        const {name, email} = payload

        if(!name || !email){
            throw new HttpError('Missing fields', HTTP_STATUS.BAD_REQUEST)
        }

        const newUserPayload = {
            name,
            email,
            role: 'USER',
            orders: []
        }

        const newUser = await usersDAO.createUser(newUserPayload)
        return newUser
    }
    async updateUser(id, payload){
        return {}
    }
}