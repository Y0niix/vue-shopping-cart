import axios from "axios"

const state = {
    cart: [],
};

const mutations = {
    UPDATE_CART(state, payload) {
        state.cart = payload
    },
};

const actions = {
    getCart({ commit }) {
        axios.get("/api/cart").then((response) => {
            commit("UPDATE_CART", response.data)
        });
    },

    addToCart({ commit }, cart) {
        axios.post("/api/cart", cart).then((response) => {
            commit("UPDATE_CART", response.data)
        });
    },

    removeFromCart({ commit }, productId) {
        axios.delete("/api/cart/delete/" + productId).then((response) => {
            commit("UPDATE_CART", response.data)
        });
    },
};

const getters = {
    cart: (state) => state.cart,
    
    cartTotalPrice: (state) => {
        return state.cart
            .reduce((acc, product) => {
                return product.quantity * product.price + acc
            }, 0)
            .toFixed(2)
    },

    cartQuantity: (state) => {
        return state.cart.reduce((acc, product) => {
            return product.quantity + acc
        }, 0);
    },
};

const cart = {
    state,
    mutations,
    actions,
    getters,
};

export default cart;
