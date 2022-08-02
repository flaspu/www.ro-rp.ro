<template>
    <div class="eclipse-left">
        <div class="container mx-auto font-poppins mt-20 px-[30px] xl:px-0 z-10">
            <div class="flex justify-between items-center">
                <h2 class="text-4xl font-semibold text-[#333] mb-4">Ultimele noutăți</h2>
                <a href="#" class="btn-sm bg-white text-sm text-slate-800 outline-primary">Vezi toate noutățile</a>
            </div>
            <LoadingCards v-if="news.length == 0" />
            <div class="lg:grid flex flex-col grid-cols-4 news gap-8 mt-4" v-else>
                <div class="card" v-for="(item, key) of news.slice(0, 4)" :key="key">
                    <div class="card-image" :style="{ backgroundImage: `url('${item.Image}')` }"></div>
                    <div class="card-header">
                        <h4 class="card-title">{{ item.Title }}</h4>
                        <h4 class="card-tooltip text-slate-600 font-light">{{ item["Date"].replace(' ', '*').split('*')[0].replace('-', '/').replace('-', '/') }}</h4>
                    </div>
                    <div class="separator"></div>
                    <p class="text-gray-500">
                        {{ item.Description }}
                        <br class="mb-2">
                        <a :href="item.Link" class="underline underline-offset-4">Citește mai mult</a>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';

const NEWS_URL = 'https://ucp.ro-rp.ro/news';

export default {
    data () {
        return {
            news: []
        }
    },
    created () {
        axios.get(NEWS_URL).then(res => {
            this.news = res.data;
        });
    }
}
</script>