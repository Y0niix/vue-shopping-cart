<template>
    <div class="flex flex-row flex-wrap justify-between mt-20">
        <div class="w-80" v-for="product in products" :key="product.id">
            <product-details :product="product" />
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex"
import ProductDetails from "./ProductDetails.vue"

export default {
    name: "ProductList",
    components: { ProductDetails },

    computed: {
        ...mapGetters(["products"])
    },

    created() {
        this.$store.dispatch("getProducts")
    },
};
</script>
