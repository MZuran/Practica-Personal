import { cartModel } from "../models/cart.model.js"

class cartDao {
    constructor() { this.model = cartModel }

    async getAllCarts(limitNumber) {
        //Handlebars NO FUNCIONA con los objetos de mongoose
        //Poner .lean() es para que esté en un formato que sí los pueda usar

        if (limitNumber) {
            return await this.model.find().limit(limitNumber).lean()
        } else {
            return await this.model.find().lean()
        }
    }

    async getCartById(id) {
        return await this.model.findById(id)
    }

    async createCart(cart) {
        return await this.model.create(cart)
    }

    async updateCart(id, cart) {
        return await this.model.findByIdAndUpdate(id, cart)
    }

    async deleteCart(id) {
        return await this.model.findByIdAndDelete(id)
    }
}

export default cartDao