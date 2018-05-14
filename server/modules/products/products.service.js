const BaseService = require('../base.service')
    , constants = require('./products.constants')
    , rules = require('./products.rules')

class ProductsService extends BaseService {
    getTable() {
        return constants.table
    }

    async list(query) {
        const limit = Number.parseInt(query.limit) || 8
            , page = Number.parseInt(query.page) || 1
            , offset = limit * (page - 1)
            , search = query.search
            , dbQuery = search ? { name: new RegExp(search, 'i') } : {}

        const allProducts = await this.collection.find(dbQuery)
            , count = await this.collection.count(dbQuery)
            , products = allProducts.slice(offset, offset + limit)
            , totalPages = Math.ceil(count / limit)

        return this.formatResponse(
            constants.routes.list,
            { page, limit, count, totalPages, products }
        )
    }
}

module.exports = new ProductsService
