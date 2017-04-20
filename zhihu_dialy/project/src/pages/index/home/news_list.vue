//新闻标题列表
<template>
    <div>
        <div id="news">
            <p class="hot-content">{{hotNews}}</p>
            <ul>
                <li class="list clearfix" v-for="item in newsArr">
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
            console.log(document.body.scrollTop)
            let _this = this
            news.getNews('api/news/latest').then(function (response) {
                _this.newsArr = response.stories
            }, function () {
                console.error('出错了', Error)
            })
            this.more()
        },
        methods: {
            more () {
                let _this = this
                let scrollTop = document.body.scrollTop
                let clientHeight = document.body.clientHeight
                console.log(Boolean(scrollTop + window.innerHeight >= clientHeight))
                if (scrollTop + window.innerHeight >= clientHeight) {
                    news.getNews('/api/news/before/20131119').then(function (response) {
                        console.log(response.stories)
                        _this.newsArr = _this.newsArr.concat(response.stories)
                    })
                }
            }
        }
    }
</script>

<style scoped>
    .more {
        position: relative;
        top: 95rem;
        left: 6rem;
    }
</style>
