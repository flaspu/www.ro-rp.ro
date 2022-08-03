<template>
    <div class="container mx-auto font-poppins px-[30px] md:px-0">
        <div class="flex flex-col md:grid grid-cols-2 py-10">
            <div class="flex flex-col justify-center">
                <h2 class="text-4xl font-semibold bg-gradient-to-r from-slate-800 to-slate-400 bg-clip-text font-display text-5xl tracking-tight text-transparent">România Roleplay</h2>
                <p class="text-gray-600 py-4 font-light text-lg">O comunitate de Hard Roleplay care rulează prin intermediul <span class="font-medium">RAGE Multiplayer</span>. Înfiinţată în data de 21 decembrie 2011, comunitatea este în continuă dezvoltare, dovadă sistemele noi, actualizările frecvente, dar şi User Control Panel-ul avansat. Având în vedere cele menţionate, comunitatea românească de hard roleplay a urcat imediat în top, fiind prima şi singura care să atingă un număr de 500 de jucători online în acelaşi timp.</p>
                <div class="flex gap-5 mt-5">
                    <a href="#" class="btn bg-discord text-lg text-white outline-discord"><fai :icon="['fab', 'discord']" /> Discord</a>
                    <a href="#" class="btn bg-primary text-lg text-slate-800 outline-primary"><fai :icon="['fab', 'wikipedia-w']" /> Wikipedia</a>
                </div>
            </div>
            <div class="flex justify-end flex-col gap-4">
                <div class="flex justify-end trailer mt-10 md:mt-0 ml-auto xl:w-[620px] w-full">
                    <button class="play">
                        <img src="@/assets/media/icons/play.svg" alt="Play">
                    </button>
                </div>
                <div class="flex gap-4 justify-end">
                    <button class="btn-icon bg-white text-2xl text-facebook outline-facebook"><fai :icon="['fab', 'facebook']" /></button>
                    <button class="btn-icon bg-white text-2xl text-instagram outline-instagram"><fai :icon="['fab', 'instagram']" /></button>
                    <button class="btn-icon bg-white text-2xl text-youtube outline-youtube"><fai :icon="['fab', 'youtube']" /></button>
                    <button class="btn-icon bg-white text-2xl text-black outline-black"><fai :icon="['fab', 'tiktok']" /></button>
                </div>
            </div>
        </div>
    </div>
</template>