const router = require('node-async-router')()

class Router {
    constructor(prefix = '') {
        this.prefix = prefix
        this.router = router
    }

    group(prefix, callback) {
        callback(new Router(`${this.prefix}/${prefix}`))
    }

    use() {
        return router.use(...arguments)
    }
}

['get', 'post', 'put', 'patch', 'delete'].forEach(method => {
    Router.prototype[method] = function (path, callback) {
        return router[method](
            `${this.prefix}/${path}`,
            async (req, res) => res.json(await callback(req))
        )
    }
})

module.exports = new Router
