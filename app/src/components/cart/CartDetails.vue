<template>
    <div class="flex justify-between items-center mt-6 pt-6 border-t">
        <div class="flex items-center">
            <img src="https://fakeimg.pl/60/?text=" width="60" class="rounded-full ">

            <div class="flex flex-col ml-3">
                <span class="md:text-md font-medium">
                    <!-- TODO: Title to add here -->
                </span>
                <span class="text-xs font-light text-gray-400">
                    <!-- TODO: id to add here -->
                </span>
            </div>
        </div>

        <div class="flex justify-center items-center">
            <div class="pr-8 flex ">
                <span class="font-semibold hover:cursor-pointer">
                    -
                    <!-- TODO: if quantity > 0 -->
                    <!-- TODO: on-click remove from cart -->
                </span>
                <input type="text" disabled class="focus:outline-none bg-gray-100 border h-6 w-8 rounded text-sm px-2 mx-2" >
                    <!-- TODO: :value of quantity to add -->
                <span class="font-semibold hover:cursor-pointer" @click="addCartItem(cartItem)">
                    +
                    <!-- TODO: on-click add quantity -->
                </span>
            </div>
            <div class="pr-8 ">
                <span class="text-xs font-medium">
                    <!-- TODO: Price to add here -->
                </span>
            </div>
            <a class="hover:cursor-pointer text-red-500	hover:text-red-600">
                <!-- TODO: on-click remove from cart -->
                <svg  xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 1024 1024">
                    <path fill="currentColor" d="M764.288 214.592L512 466.88L259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512L214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"/>
                </svg>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name: "CartListItem",
};
</script>
