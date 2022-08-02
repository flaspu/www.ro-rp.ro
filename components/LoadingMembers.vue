<template>
    <div class="member shadow-lg flex flex-row p-4 gap-4" v-for="(item, key) in Math.floor(Math.random() * 7) + 5" :key="key">
        <div class="flex flex-row">
            <div class="rounded-full avatar bg-slate-100"></div>
        </div>
        <div class="flex flex-col">
            <h2 class="text-lg font-semibold bg-slate-100 rounded-full" style="width: 100px; height: 14px;"></h2>
            <div class="roles flex-col">
                <div class="role bg-slate-100 rounded-full font-light placeholder" style="width: 170px; height: 26px;" v-for="(role, key) in Math.floor(Math.random() * 2) + 1" :key="key"></div>
            </div>
        </div>
    </div>
</template>