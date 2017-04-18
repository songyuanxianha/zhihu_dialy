//主题日报详情页
<template>
    <div>
        <div>
            <div id="nav">
                <img @click="side()" class="nav_mine_log" src="/static/img/nav_mine.png">
                <span class="nav_home_log">{{themesName}}</span>
            </div>
        </div>
        <div id="news">
            <p class="hot-content">主编</p>
            <ul class="clearfix">
                <li v-for="item in themes">
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
export default {
    data () {
        return {
            themesName: [],
            themesList: []
        }
    },
    created () {
        let reg = /\d+/g
        let id = this.$route.path.match(reg)
        let _this = this
        let url = 'api/theme/' + id
        this.getNews(url).then(function (response) {
            _this.themes = response.stories
            _this.themesName = response.name
            console.log(response)
        }, function () {
            console.error('出错了', Error)
        })
    },
    methods: {
        getNews (url) {
            var promise = new Promise(function (resolve, reject) {
                var xhr = new XMLHttpRequest()
                xhr.responseType = 'json'
                xhr.onreadystatechange = function () {
                    if (this.readyState === 4) {
                        if (this.status >= 200 && this.status < 300) {
                            resolve(this.response)
                        } else {
                            reject(new Error(this.statusText))
                        }
                    }
                }
                xhr.open('GET', url, true)
                xhr.send(null)
            })
            return promise
        }
    }
}
</script>

<style type="text/css">

</style>
