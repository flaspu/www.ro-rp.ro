<template>
    <div class="container mx-auto">
        <div class="navbar px-[30px] md:px-0 py-[38px] lg:py-[58px] 2xl:px-[0px] flex justify-between items-center font-poppins">
            <div class="flex items-center justify-between xl:justify-start w-full 2xl:gap-20 xl:gap-[50px] relativ">
                <div class="branding z-10">
                    <a href="#">
                        <img src="@/assets/media/logos/logo-1.png" alt="Romania Roleplay">
                    </a>
                </div>
                <ul class="flex flex-col md:flex-row gap-8 lg:gap-[80px] text-lg font-semibold absolute md:relative md:bg-transparent bg-white pt-[160px] pb-[60px] md:py-0 px-10 top-0 left-0 w-full justify-end xl:justify-start"
                    :class="{ 'md:flex hidden': !menu }"
                >
                    <li class="text-slate-500 hover:text-slate-600 ease-in-out duration-300 before:hidden md:before:block" :class="{ 'active': route.path == '/' }">
                        <NuxtLink to="/">Acasă</NuxtLink>
                    </li>
                    <li class="text-slate-500 hover:text-slate-600 ease-in-out duration-300 before:hidden md:before:block">
                        <a href="https://ro-rp.ro/forum">Forum</a>
                    </li>
                    <li class="text-slate-500 hover:text-slate-600 ease-in-out duration-300 before:hidden md:before:block" :class="{ 'active': route.path == '/team' }">
                        <NuxtLink to="/team">Echipa Administrativă</NuxtLink>
                    </li>
                    <li class="text-slate-500 hover:text-slate-600 ease-in-out duration-300 before:hidden md:before:block">
                        <a href="https://wiki.ro-rp.ro/">Wikipedia</a>
                    </li>
                </ul>
            </div>
            <div class="hidden xl:flex gap-6 text-lg">
                <a href="#" class="btn-icon bg-white text-slate-800 outline-primary"><IconsMoon /></a>
                <a href="https://ucp.ro-rp.ro/login" class="btn bg-white text-slate-800 outline-primary font-medium">Autentificare</a>
                <a href="https://ucp.ro-rp.ro/register" class="btn bg-primary text-slate-800 outline-primary font-medium">Înregistrare</a>
            </div>
            <button class="flex md:hidden btn-mobile z-10 " @click="this.menu = !this.menu;">
                <img v-if="!menu" src="@/assets/media/icons/menu-right.svg" alt="Open Menu">
                <img v-else src="@/assets/media/icons/x.svg" alt="Close Menu">
            </button>
        </div>
    </div>
</template>
<script setup>

const route = useRoute();
let menu = false;

</script>