import axios from 'axios'
import config from '_config'

const url = `${config.API_URL}/products`

export default {
    state: {
        paginate: {},
    },

    mutations: {
        setPaginate(state, paginate) {
            state.paginate = paginate
        },
    },

    actions: {
        getProducts({ commit, state }, params) {
            params = Object.assign({}, state.paginate, params)
            delete params.products
            delete params.count
            delete params.totalPages

            axios.get(url, { params }).then(response => commit('setPaginate', response.data.data))
        },
    },
}
