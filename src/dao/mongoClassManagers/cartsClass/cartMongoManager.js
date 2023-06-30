const Cart = require("../../models/carts.model");



class MongoCartManager {

    async getCarts() {
        try {
            const carts = await Cart.find();
            return carts;
        }
        catch (error) {
            return logger.error(`something went wrong ${error}`);
        }
    }

    async findUserID(id) {
        try {
            const response = await Cart.findOne({ owner: id })
            return response;
        }
        catch (error) {
            throw logger.error(`something went wrong ${error}`)
        }
    }

    async addCart(cart) {
        try {
            const addMongoCart = await Cart.create(cart);
            return addMongoCart;
        }
        catch (error) {
            return logger.error(`something went wrong ${error}`);
        }
    }

    async getCartById(id) {
        try {
            const getCartByIdMongo = await Cart.findOne({ _id: id });
            return getCartByIdMongo;

        }
        catch (error) {
            return logger.error(`something went wrong ${error}`);
        }
    }

    async postCartProductsId(idCart, idProduct, exist) {
        try {
            const cart = await Cart.findById(idCart);
            if (exist) {
                const productsArrayPosition = cart.products.findIndex(item => item.product.id == idProduct);
                cart.products[productsArrayPosition].quantity = cart.products[productsArrayPosition].quantity + 1;
            }
            else {
                cart.products.push({ product: idProduct, quantity: 1 });
            }
            const response = Cart.findByIdAndUpdate(idCart, cart)
            return response;
        }
        catch (error) {
            return logger.error(`something went wrong ${error}`);
        }
    }

    async deleteCartProductsId(id, arrayProducts) {
        try {
            const ProductByIdMongo = await Cart.findByIdAndUpdate(id, { products: arrayProducts });
            return "cart products deleted"
        }
        catch (error) {
            return logger.error(`something went wrong ${error}`);
        }
    }

    async deleteById(id) {
        try {
            const deleteByIdMongo = await Cart.findByIdAndDelete(id);
            return "deleted cart successfully"
        }
        catch (error) {
            return logger.error(`something went wrong ${error}`);
        }
    }

    async updateCartProductsId(idCart, idProduct, exist, quantity) {
        try {
            const cart = await Cart.findById(idCart);
            if (exist) {
                const productsArrayPosition = cart.products.findIndex(item => item.product.id == idProduct);
                cart.products[productsArrayPosition].quantity = quantity;
            }
            else {
                cart.products.push({ product: idProduct, quantity: quantity });
            }
            const response = Cart.findByIdAndUpdate(idCart, cart)
            return response;
        }
        catch (error) {
            return logger.error(`something went wrong ${error}`);
        }
    }

    async updateCartId(idCart, products) {
        try {
            const cart = await Cart.findById(idCart);
            cart.products = products

            const response = Cart.findByIdAndUpdate(idCart, cart)
            return response;
        }
        catch (error) {
            return logger.error(`something went wrong ${error}`);
        }
    }
}

module.exports = { MongoCartManager };
