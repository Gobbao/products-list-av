const Monk = require('monk')
    , Validator = require('validatorjs')

const dbUser = process.env.DB_USER
    , dbPass = process.env.DB_PASS
    , dbHost = process.env.DB_HOST
    , dbCred = dbUser ? `${dbUser}:${dbPass}@` : ''
    , dbPath = `${dbCred}${dbHost}`
    , monk = Monk(dbPath)

class BaseService {
    constructor() {
        this.monk = monk
        this.collection = this.monk.get(this.getTable())
    }

    /**
     * @param {string} _id
     * @param {Object} data
     */
    async findAndMerge(_id, data) {
        const [ dbData ] = await this.collection.find({ _id })

        return Object.assign(dbData, data)
    }

    /**
     * @param {string} message
     * @param {any} data
     */
    formatResponse(message, data = null) {
        this.monk.close()

        return { message, data }
    }

    /**
     * @param {Object} obj
     * @param {array} props
     */
    getOnly(obj, props) {
        return props.reduce((prev, curr) => {
            if (typeof obj[curr] !== 'undefined') {
                prev[curr] = obj[curr]
            }

            return prev
        }, {})
    }

    /**
     * @param {Object} obj
     * @param {array} props
     */
    getExcept(obj, props) {
        return this.getOnly(
            obj,
            Object.keys(obj).filter(prop => !props.includes(prop))
        )
    }

    getTable() {
        return null
    }

    /**
     * @param {Object} data
     * @param {Object} rules
     */
    validate(data, rules) {
        const validator = new Validator(data, rules)

        if (validator.fails()) {
            throw {
                code: 422,
                message: Object.values(validator.errors.all())[0][0]
            }
        }
    }
}

module.exports = BaseService
