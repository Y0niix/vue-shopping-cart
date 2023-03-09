<template>
    <div class="max-w-md mx-auto bg-gray-100 shadow-lg rounded-lg  md:max-w-5xl mt-20">
        <div class="md:flex ">
            <div class="w-full p-4 px-5 py-5">
                <!-- if shopping cart empty -->
                <div v-if="!cart.length" class="place-content-center my-20">
                    <div  class="text-center">
                        <p>Your shopping cart is empty!</p>
                        <router-link to="/" class="text-sm pr-2 mt-4 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-emerald-500 rounded-lg hover:bg-emerald-600 focus:ring-4 focus:outline-none focus:ring-emerald-500">
                            <svg class="w-4 h-4 mr-2 -ml-1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                                <path fill="currentColor" d="M10.813 9.281L4.093 16l6.72 6.719l1.406-1.438L7.938 17H28v-2H7.937l4.282-4.281z"/>
                            </svg>
                            <span class="text-md">Continue Shopping</span>
                        </router-link>
                    </div>
                </div>

                <!-- else shopping cart length > 1 -->
                <div v-else class="md:grid md:grid-cols-3 gap-2 ">
                    <div class="col-span-2 p-5">
                        <h1 class="text-xl font-medium ">Shopping Cart</h1>

                        <div v-for="product in cart" :key="product.id">
                            <cart-details :product="product" />
                        </div>

                        <!-- Continue shopping button and total -->
                        <div class="flex justify-between items-center mt-6 pt-6 border-t"> 
                            <div class="flex items-center">
                                <router-link to="/" class="text-sm pr-2 mt-4 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-emerald-500 rounded-lg hover:bg-emerald-600 focus:ring-4 focus:outline-none focus:ring-emerald-500">
                                    <svg class="w-4 h-4 mr-2 -ml-1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                                        <path fill="currentColor" d="M10.813 9.281L4.093 16l6.72 6.719l1.406-1.438L7.938 17H28v-2H7.937l4.282-4.281z"/>
                                    </svg>
                                    <span class="text-md">Continue Shopping</span>
                                </router-link>
                            </div>

                            <div class="flex justify-center items-end align-center">
                                <span class="text-sm font-medium text-gray-400 mr-1">Total:</span>
                                <span class="text-lg font-bold text-gray-800 ">
                                    {{ cartTotalPrice }} €
                                </span>
                            </div>
                        </div>
                    </div>

                    <div class=" p-5 bg-gray-800 rounded overflow-visible">
                        <span class="text-xl font-medium text-gray-100 block pb-3">Card Details</span>
                        <span class="text-xs text-gray-400 ">Card Type</span>
                        <div class="overflow-visible flex justify-between items-center mt-2">
                            <div class="rounded w-52 h-28 bg-gray-500 py-2 px-4 relative right-10">
                                <span class="italic text-lg font-medium text-gray-200 underline">VISA</span>
                                <div class="flex justify-between items-center pt-4 ">
                                    <span class="text-xs text-gray-200 font-medium">****</span>
                                    <span class="text-xs text-gray-200 font-medium">****</span>
                                    <span class="text-xs text-gray-200 font-medium">****</span>
                                    <span class="text-xs text-gray-200 font-medium">****</span>
                                </div>

                                <div class="flex justify-between items-center mt-3">
                                    <span class="text-xs text-gray-200">John Doe</span>
                                    <span class="text-xs text-gray-200">12/25</span>
                                </div>
                            </div>

                            <div class="flex justify-center  items-center flex-col">
                                <img src="https://img.icons8.com/color/96/000000/mastercard-logo.png" width="40" class="relative right-5" />
                                <span class="text-xs font-medium text-gray-200 bottom-2 relative right-5">mastercard.</span>
                            </div>
                        </div>

                        <div class="flex justify-center flex-col pt-3">
                            <label class="text-xs text-gray-400 ">Name on Card</label>
                            <input type="text" class="focus:outline-none w-full h-6 bg-gray-800 text-white placeholder-gray-300 text-sm border-b border-gray-600 py-4" placeholder="John Doe">
                        </div>

                        <div class="flex justify-center flex-col pt-3">
                            <label class="text-xs text-gray-400 ">Card Number</label>
                            <input type="text" class="focus:outline-none w-full h-6 bg-gray-800 text-white placeholder-gray-300 text-sm border-b border-gray-600 py-4" placeholder="****   ****   ****   ****">
                        </div>

                        <div class="grid grid-cols-3 gap-2 pt-2 mb-3">
                            <div class="col-span-2 ">
                                <label class="text-xs text-gray-400">Expiration Date</label>
                                <div class="grid grid-cols-2 gap-2">
                                    <input type="text" class="focus:outline-none w-full h-6 bg-gray-800 text-white placeholder-gray-300 text-sm border-b border-gray-600 py-4" placeholder="12">
                                    <input type="text" class="focus:outline-none w-full h-6 bg-gray-800 text-white placeholder-gray-300 text-sm border-b border-gray-600 py-4" placeholder="2025">
                                </div>
                            </div>

                            <div class="">
                                <label class="text-xs text-gray-400">CVV</label>
                                <input type="text" class="focus:outline-none w-full h-6 bg-gray-800 text-white placeholder-gray-300 text-sm border-b border-gray-600 py-4" placeholder="XXX">
                            </div>
                        </div>
                        <button class="h-12 w-full bg-blue-500 rounded focus:outline-none text-white hover:bg-blue-600">
                            Check Out
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex"
import CartDetails from "./CartDetails.vue"

export default {
    name: "CartList",
    components: { CartDetails },

    computed: {
        ...mapGetters(["cart", "cartTotalPrice", "cartQuantity"])
    },

    created() {
        this.$store.dispatch("getCart")
    },
};
</script>
