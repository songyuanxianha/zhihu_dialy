<template>
    <div>
        <div id="slider">
            <div class="img">
                <div>
                    <img :src="nowSrc">
                    <p>{{nowP}}</p>
                </div>
            </div>
            <ol>
                <li :class="{'active': isActive[0]}"></li>
                <li :class="{'active': isActive[1]}"></li>
                <li :class="{'active': isActive[2]}"></li>
                <li :class="{'active': isActive[3]}"></li>
                <li :class="{'active': isActive[4]}"></li>
            </ol>
        </div>
    </div>
</template>

<script type="text/javascript">
    export default {
        data () {
            return {
                topNews: [],  // 顶部轮播图部分的数据
                nowSrc: '',  // 轮播图当前的src
                nowP: '正在加载',  // 轮播图的当前标题
                i: 0,
                isActive: [false, false, false, false, false]
            }
        },
        created () {
            let _this = this
            this.getSliderNews('api/news/latest').then(function (response) {
                _this.topNews = response.top_stories
                _this.nowSrc = _this.topNews[0].image
                _this.nowP = _this.topNews[0].title
                _this.isActive[0] = true
                setInterval(function () {
                    _this.nowSrc = _this.topNews[_this.i % _this.topNews.length].image
                    _this.nowP = _this.topNews[_this.i % _this.topNews.length].title
                    for (var i = 0; i < _this.topNews.length; i++) {
                        _this.isActive[i] = false
                    }
                    _this.isActive[_this.i % _this.topNews.length] = true
                    _this.i++
                }, 3000)
            }, function () {
                console.error('出错了', Error)
            })
        },
        methods: {
            getSliderNews (url) {
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
    #slider {
        width:16rem;
        height: 10rem;
        top: 0rem;
    }
    #slider img {
        width: 16rem;
        height: 10rem;
        display: block;
        position: absolute;
        left: 0rem;
    }
    #slider p {
        position: absolute;
        top: 8.1rem;
        color: #fff;
        left: 0.8rem;
        font-size: 0.9rem;
        line-height: 0.9rem;
    }
    #slider ol {
        position:absolute;
        left: 5rem;
        top: 10.3rem;
    }
    #slider ol li {
        width: 0.3rem;
        height: 0.3rem; 
        background: #858585; 
        float: left; 
        border-radius: 50%; 
        margin-right: 0.14rem;
    }
    #slider ol li.active { 
        background:#fff;
    }
</style>
