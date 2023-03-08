<template>
    <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded">
        <div class="container flex flex-wrap items-center justify-between mx-auto">
            <router-link to="/" class="flex items-center">
                <img src="../../assets/logo-dark.png"
                    class="h-6 mr-3 sm:h-9"
                    alt="Logo de Yann" 
                />
            </router-link>
            
            <div class="block w-auto" id="navbar-default">
                <ul class="flex p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 flex-row space-x-8 mt-0 text-sm font-medium border-0 bg-white">
                    <li>
                        <router-link to="/cart" class="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 hover:bg-transparent border-0 hover:text-blue-700 p-0">
                            <span class="relative inline-block">
                                <svg class="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32">
                                    <path fill="currentColor" d="M5 7c-.55 0-1 .45-1 1s.45 1 1 1h2.219l2.625 10.5c.222.89 1.02 1.5 1.937 1.5H23.25c.902 0 1.668-.598 1.906-1.469L27.75 10H11l.5 2h13.656l-1.906 7H11.781L9.156 8.5A1.983 1.983 0 0 0 7.22 7zm17 14c-1.645 0-3 1.355-3 3s1.355 3 3 3s3-1.355 3-3s-1.355-3-3-3zm-9 0c-1.645 0-3 1.355-3 3s1.355 3 3 3s3-1.355 3-3s-1.355-3-3-3zm0 2c.563 0 1 .438 1 1c0 .563-.438 1-1 1c-.563 0-1-.438-1-1c0-.563.438-1 1-1zm9 0c.563 0 1 .438 1 1c0 .563-.438 1-1 1c-.563 0-1-.438-1-1c0-.563.438-1 1-1z"/>
                                </svg>
                                <span class="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
                                    <!-- TODO: Quantity to add here -->
                                </span>
                            </span>
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: "Navbar",
};
</script>
