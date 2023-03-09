<template>
    <div class="flex justify-between items-center mt-6 pt-6 border-t">
        <div class="flex items-center">
            <img :src="'https://fakeimg.pl/60/?text=' + product.title" width="60" class="rounded-full ">

            <div class="flex flex-col ml-3">
                <span class="md:text-md font-medium">
                    {{ product.title }}
                </span>
                <span class="text-xs font-light text-gray-400">
                    #{{ product.id }}
                </span>
            </div>
        </div>

        <div class="flex justify-center items-center">
            <div class="pr-8 flex ">
                <span v-if="product.quantity > 0" 
                    @click="removeFromCart(product.id)"
                    class="font-semibold hover:cursor-pointer">
                    -
                </span>

                <input type="text" disabled class="focus:outline-none bg-gray-100 border h-6 w-8 rounded text-sm px-2 mx-2" :value="product.quantity">
                
                <span class="font-semibold hover:cursor-pointer" 
                    @click="addToCart(product)">
                    +
                </span>
            </div>
            <div class="pr-8 ">
                <span class="text-xs font-medium">
                    {{ product.price }} €
                </span>
            </div>
            <a @click="removeFromCart(product.id)" class="hover:cursor-pointer text-red-500 hover:text-red-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 1024 1024">
                    <path fill="currentColor" d="M764.288 214.592L512 466.88L259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512L214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"/>
                </svg>
            </a>
        </div>
    </div>
</template>

<script>
import { mapActions } from "vuex"

export default {
    name: "CartDetails",
    props: ["product"],

    methods: {
        ...mapActions(["addToCart", "removeFromCart"])
    },
};
</script>