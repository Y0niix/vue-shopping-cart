import axios from "axios"

const state = {
    products: [],
};

const mutations = {
    UPDATE_PRODUCTS(state, payload) {
        state.products = payload
    },
};

const actions = {
    getProducts({ commit }) {
        axios.get(`/api/products`).then((response) => {
            commit("UPDATE_PRODUCTS", response.data)
        });
    },
};

const getters = {
    products: (state) => state.products,
    
    productById: (state) => (id) => {
        return state.products.find((product) => product.id === id)
    },
};

const product = {
    state,
    mutations,
    actions,
    getters,
};

export default product;
