const BaseService = require('../base.service')
    , constants = require('./products.constants')
    , rules = require('./products.rules')

class ProductsService extends BaseService {
    getTable() {
        return constants.table
    }

    async list() {
        return this.formatResponse(
            constants.routes.list,
            await this.collection.find()
        )
    }
}

module.exports = new ProductsService
