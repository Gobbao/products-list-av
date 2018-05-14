const router = require('./utils/router')
    , services = require('./utils/services')

router.group('v1', router => {
    router.group('products', router => {
        const service = services['products']()

        router.get('', req => service.list())
    })
})

module.exports = router.router
