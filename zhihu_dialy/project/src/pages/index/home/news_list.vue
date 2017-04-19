//新闻标题列表
<template>
    <div>
        <div id="news">
            <p class="hot-content">{{hotNews}}</p>
            <ul class="clearfix">
                <li class="list"v-for="item in newsArr">
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
                newsArr: [],  // 新闻列表数据
                hotNews: '今日热文'
            }
        },
        created () {
            let _this = this
            news.getNews('api/news/latest').then(function (response) {
                _this.newsArr = response.stories
            }, function () {
                console.error('出错了', Error)
            })
        },
        methods: {
        }
    }
</script>

<style scoped>
    
</style>
