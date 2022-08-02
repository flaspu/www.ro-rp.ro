<template>
    <div class="lg:grid flex flex-col grid-cols-4 news gap-8 mt-4">
        <div class="card" v-for="(item, key) in 4" :key="key">
            <div class="card-image bg-slate-100"></div>
            <div class="card-header mb-4">
                <div class="text-slate-600 font-light bg-slate-100 rounded w-[200px] h-5"></div>
                <div class="card-tooltip text-slate-600 font-light bg-slate-100 rounded w-20 h-5"></div>
            </div>
            <div class="px-[35px] py-4 flex flex-row gap-1">
                <div class="bg-slate-100 rounded w-[130px] h-3"></div>
                <div class="bg-slate-100 rounded w-[40px] h-3"></div>
                <div class="bg-slate-100 rounded w-[100px] h-3"></div>
            </div>
            <div class="px-[35px] flex flex-row gap-1">
                <div class="bg-slate-100 rounded w-[30px] h-3"></div>
                <div class="bg-slate-100 rounded w-[140px] h-3"></div>
                <div class="bg-slate-100 rounded w-[90px] h-3"></div>
            </div>
            <div class="px-[35px] py-4 flex flex-row gap-1">
                <div class="bg-slate-100 rounded w-[50px] h-3"></div>
                <div class="bg-slate-100 rounded w-[100px] h-3"></div>
                <div class="bg-slate-100 rounded w-[120px] h-3"></div>
            </div>
        </div>
    </div>
</template>