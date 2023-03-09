<template>
    <div class="min-h-screen">
        <Navbar />
        
        <div class="container mx-auto">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import Navbar from "./components/shared/Navbar.vue"

export default {
    name: "App",
    components: { Navbar }
};
</script>
