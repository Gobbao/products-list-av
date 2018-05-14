const glob = require('glob').sync

module.exports = glob('/../modules/*/*.service.js', { root: __dirname })
    .reduce((prev, curr) => {
        const path = curr.split('/modules/')[1]
            , name = path.split('/')[1].split('.')[0]
            , relPath = `../modules/${path}`

        prev[name] = () => require(relPath)
        return prev
    }, {})
