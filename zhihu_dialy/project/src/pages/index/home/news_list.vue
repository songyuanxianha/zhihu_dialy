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
                hotNews: '今日热文',
                beforeNewsDate: ''
            }
        },
        created () {
            let _this = this
            news.getNews('api/news/latest').then(function (response) {
                _this.newsArr = response.stories
                _this.beforeNewsDate = response.date - 1
                console.log(response.date)
            }, function () {
                console.error('出错了', Error)
            })
            this.getMore()
        },
        methods: {
            getMore () {
                let _this = this
                document.onscroll = function () {
                    let sTop = document.body.scrollTop
                    let sHeight = document.body.scrollHeight
                    let url = '/api/news/before/' + _this.beforeNewsDate
                    if (window.innerHeight + sTop >= sHeight) {
                        news.getNews(url).then(function (response) {
                            _this.newsArr = _this.newsArr.concat(response.stories)
                            _this.beforeNewsDate--
                        })
                    }
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
