<template>
    <div class="mt-8 max-w-sm bg-white border border-gray-200 rounded-lg shadow">
        <img class="rounded-t-lg" 
            :src="'https://fakeimg.pl/382x255/?text=' + product.title"
            :alt="'Image ' + product.title" 
        />
        <div class="p-5">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                {{ product.title }}
            </h5>
            <p class="mb-3 font-normal text-gray-700">
                {{ product.description }}
            </p>
            <div class="flex items-center justify-between">
                <span class="text-3xl font-bold text-gray-900">
                    {{ product.price }} €
                </span>
                <a @click="addToCart(product)"
                    class="text-white bg-emerald-500 hover:bg-emerald-600 hover:cursor-pointer focus:ring-4 focus:outline-none focus:ring-emerald-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                    Add to cart
                </a>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from "vuex"

export default {
    name: "ProductDetails",
    props: ["product"],

    methods: {
        ...mapActions(["addToCart"]),
    },
};
</script>
