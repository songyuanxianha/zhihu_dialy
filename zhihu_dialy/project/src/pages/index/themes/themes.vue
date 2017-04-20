//主题日报跳转页
<template>
    <div>
        <div>
            <div v-show="showSide">
                <side></side>
                <div id="mask" @click="hidenSide()"></div>
            </div>
            <div id="nav">
                <img @click="side()" class="nav_mine_log" src="/static/img/nav_mine.png">
                <span class="nav_home_log">{{themesName}}</span>
            </div>
        </div>
        <div>
            <img :src="themes.background" class="themes-top-img">
            <p class="themes-top-title">{{themes.description}}</p>
        </div>
        <div id="news">
            <p class="hot-content">主编</p>
            <ul class="clearfix">
                <li class="list clearfix" v-for="item in themesList">
                    <router-link :to="'/newsContent'+item.id">
                        <p>{{item.title}}</p>
                        <img :src="item.images" v-if="item.images">
                    </router-link>
                </li>
                <p>加载更多</p>
            </ul>
        </div>
    </div>
</template>

<script type="text/javascript">
import side from '../home/side.vue'
import news from '../data/news'  // 获取数据
export default {
    components: {
        side
    },
    data () {
        return {
            themesName: [],
            themesList: {},
            themes: [],
            showSide: false
        }
    },
    created () {
        let reg = /\d+/g
        let id = this.$route.path.match(reg)
        let _this = this
        let url = 'api/theme/' + id
        news.getNews(url).then(function (response) {
            _this.themesList = response.stories
            _this.themesName = response.name
            _this.themes = response
        }, function () {
            console.error('出错了', Error)
        })
    },
    methods: {
        side: function () {
            this.showSide = true
        },
        hidenSide: function () {
            this.showSide = false
        }
    }
}
</script>

<style type="text/css" scoped>
    .themes-top-img {
        width: 16rem;
        height: 10rem;
        display: block;
        position: absolute;
        left: 0rem;
    }
    .themes-top-title {
        position: absolute;
        top: 8.1rem;
        color: #fff;
        left: 0.8rem;
        font-size: 0.9rem;
        line-height: 0.9rem;
    }
    #news {
        position: absolute;    
        top: 12rem;
    }
</style>
