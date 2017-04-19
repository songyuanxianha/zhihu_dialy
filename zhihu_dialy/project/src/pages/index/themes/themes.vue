//主题日报跳转页
<template>
    <div>
        <div>
            <div id="nav">
                <img class="nav_mine_log" src="/static/img/nav_mine.png">
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
                <li :class="{list: hasImg}" v-for="item in themesList">
                    <router-link :to="'/newsContent'+item.id">
                        <p>{{item.title}}</p>
                        <img :src="item.images">
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script type="text/javascript">
import news from '../data/news'  // 获取数据
export default {
    data () {
        return {
            themesName: [],
            themesList: {},
            themes: [],
            hasImg: false
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
            // console.log(response.stories[2].images)
            for (var i = 0; i < _this.themesList.length; i++) {
                // console.log(Boolean(response.stories[i].images))
                if (_this.themesList[i].images) {
                    _this.hasImg = true
                    // console.log($('li'))
                    // _this.noImg = true
                }
            }
            // console.log(response)
        }, function () {
            console.error('出错了', Error)
        })
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
    .list {
        background: #fafafa;
        width: 14.73rem;
        height: 4.4rem;
        border: 1px solid #e7e7e7;
        border-radius: 5%;
        font-size: 0.74rem;
        line-height: 0.95rem;
        padding-top: 0.76rem;
        padding-left: 0.33rem;
        margin-bottom: 0.34rem;
    }
    .title {
        background: red;
        background: #fafafa;
        width: 14.73rem;
        height: 4.4rem;
        border: 1px solid #e7e7e7;
        border-radius: 5%;
        font-size: 0.74rem;
        line-height: 0.95rem;
        padding-top: 0.76rem;
        padding-left: 0.33rem;
        margin-bottom: 0.34rem;
    }
</style>
