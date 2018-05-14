require('dotenv').config()

const app = require('express')()
    , cors = require('cors')
    , bodyParser = require('body-parser')
    , router = require('./routes')
    , port = process.env.PORT

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(router)
app.use((err, req, res, next) => {
    const code = err.code || 500
        , error = err.message || err

    res.status(code).json({ error })
})

app.listen(port, () => {
    console.log(
        '\n%s\x1b[32m%s\x1b[0m',
        'Server listening on port ',
        `${port}\n`
    )
})
