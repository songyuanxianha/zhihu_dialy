export default {
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
