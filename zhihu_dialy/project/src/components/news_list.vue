//新闻标题列表
<template>
    <div>
        <div id="news">
            <p class="hot-content">今日热文</p>
            <ul class="clearfix">
                <li v-for="item in newsArr">
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
                newsArr: []  // 新闻列表数据
            }
        },
        // 获取数据
        created () {
            var _this = this
            this.getNews('api/news/latest').then(function (response) {
                _this.newsArr = response.stories
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

<style scoped>
    #news {
        width: 16rem;
        position: relative;
        top: 0rem;
        left: 0rem;
        background: #f3f3f3;
    }
    .hot-content {
        font-size: 0.58rem;
        line-height: 0.58rem;
        position: absolute;
        top: 0.85rem;
        left: 0.74rem;
        color: #6f6f6f;
    }
    #news ul {
        position: absolute;
        top: 3.34rem;
        left: -0.5rem;
        right: 0rem;
    }
    #news ul li {
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
    #news ul li p {
        width: 9.73rem;
        float: left;
    }
    #news ul li img {
        width: 3.64rem;
        height: 3.19rem;
        margin-right: 0.74rem;
        float: right;
    }
</style>
