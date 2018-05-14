const BaseService = require('../base.service')
    , constants = require('./products.constants')
    , rules = require('./products.rules')

class ProductsService extends BaseService {
    getTable() {
        return constants.table
    }

    list() {
        return this.formatResponse(
            constants.routes.list,
            { name: 'Prod 1' }
        )
    }
}

module.exports = new ProductsService
