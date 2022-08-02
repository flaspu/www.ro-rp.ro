<template>
    <div class="container mx-auto font-poppins mt-5 px-[30px] xl:px-0">
        <h2 class="text-4xl font-semibold text-[#333] mb-4">Pașii preliminari</h2>
        <div class="flex flex-col gap-4">
            <div class="step shadow-lg flex flex-col xl:flex-row items-center xl:h-[200px] h-auto p-10 xl:p-0" style="background-image: url('/_nuxt/assets/media/backgrounds/buy-game.png');">
                <div class="flex items-center justify-between flex-col xl:flex-row">
                    <div class="icon mx-20 mt-4 xl:mt-0">
                        <font-awesome-icon :icon="['fa', 'shopping-basket']" />
                    </div>
                    <div class="step-content text-white xl:w-[30vw] w-full my-10 xl:my-0">
                        <h2 class="font-semibold text-3xl">Achiziționarea jocului</h2>
                        <div class="separator"></div>
                        <p class="text-xl">Primul pas pentru a putea juca la noi pe comunitate este
                            achizitionarea jocului Grand Theft Auto V.</p>
                    </div>
                </div>
                <div class="flex items-center justify-end w-full mx-20">
                    <a href="#" class="btn bg-primary text-slate-800 outline-primary font-medium">Cumpără</a>
                </div>
            </div>
            <div class="step shadow-lg flex flex-col xl:flex-row items-center xl:h-[200px] h-auto p-10 xl:p-0" style="background-image: url('/_nuxt/assets/media/backgrounds/download-client.png');">
                <div class="flex items-center justify-between flex-col xl:flex-row">
                    <div class="icon mx-20 mt-4 xl:mt-0">
                        <font-awesome-icon :icon="['fa', 'download']" />
                    </div>
                    <div class="step-content text-white xl:w-[30vw] w-full my-10 xl:my-0">
                        <h2 class="font-semibold text-3xl">Descărcarea clientului</h2>
                        <div class="separator"></div>
                        <p class="text-xl">Al doilea pas este descărcarea clientului. Puteți face asta accesând butonul din partea dreaptă.</p>
                    </div>
                </div>
                <div class="flex items-center justify-end w-full mx-20">
                    <a href="#" class="btn bg-primary text-slate-800 outline-primary font-medium">Descarcă</a>
                </div>
            </div>
            <div class="step shadow-lg flex flex-col xl:flex-row items-center xl:h-[200px] h-auto p-10 xl:p-0" style="background-image: url('/_nuxt/assets/media/backgrounds/create-account.png');">
                <div class="flex items-center justify-between flex-col xl:flex-row">
                    <div class="icon mx-20 mt-4 xl:mt-0">
                        <font-awesome-icon :icon="['fa', 'check']" />
                    </div>
                    <div class="step-content text-white xl:w-[30vw] w-full my-10 xl:my-0">
                        <h2 class="font-semibold text-3xl">Crearea contului</h2>
                        <div class="separator"></div>
                        <p class="text-xl">Ultimul pas este crearea contului. Pentru mai multe informații, puteți accesa pagina oficială de Wikipedia.</p>
                    </div>
                </div>
                <div class="flex items-center justify-end w-full mx-20">
                    <a href="#" class="btn bg-primary text-slate-800 outline-primary font-medium">Înregistrare</a>
                </div>
            </div>
        </div>
    </div>
</template>