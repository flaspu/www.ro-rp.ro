<template>
    <div class="container mx-auto">
        <div class="navbar px-[80px] md:px-0 py-[58px] 2xl:px-[80px] flex justify-between items-center font-poppins">
            <div class="flex items-center 2xl:gap-20 xl:gap-[50px]">
                <div class="branding">
                    <a href="#">
                        <img src="@/assets/media/logos/logo-1.png" alt="Romania Roleplay">
                    </a>
                </div>
                <ul class="hidden xl:flex gap-20 xl:gap-[60px] text-lg font-semibold">
                    <li class="text-slate-500 hover:text-slate-600 ease-in-out duration-300 active">
                        <a href="#">Acasă</a>
                    </li>
                    <li class="text-slate-500 hover:text-slate-600 ease-in-out duration-300">
                        <a href="#">Forum</a>
                    </li>
                    <li class="text-slate-500 hover:text-slate-600 ease-in-out duration-300">
                        <a href="#">Echipa Administrativă</a>
                    </li>
                    <li class="text-slate-500 hover:text-slate-600 ease-in-out duration-300">
                        <a href="#">Wikipedia</a>
                    </li>
                </ul>
            </div>
            <div class="hidden md:flex gap-6 text-lg">
                <a href="#" class="btn-icon bg-white text-slate-800 outline-primary"><IconsMoon /></a>
                <a href="#" class="btn bg-white text-slate-800 outline-primary">Autentificare</a>
                <a href="#" class="btn bg-primary text-slate-800 outline-primary">Inregistrare</a>
            </div>
            <div class="flex md:hidden btn-mobile">
                <IconsGrid2 />
            </div>
        </div>
    </div>
</template>