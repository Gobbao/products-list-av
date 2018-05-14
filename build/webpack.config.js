const webpack = require('webpack')
    , alias = require('./configs/alias.config')

const HtmlWebpackPlugin = require('html-webpack-plugin')
    , { VueLoaderPlugin } = require('vue-loader')

console.log('ENV =>', process.env.NODE_ENV)

module.exports = {
    mode: 'development',

    entry: [
        './src/main.js'
    ],

    resolve: {
        alias
    },

    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.(js|vue)$/,
                use: 'eslint-loader'
            },
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.js$/,
                use: 'babel-loader'
            },
            {
                test: /\.scss$/,
                use: ['vue-style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: 'url-loader?' + JSON.stringify({
                    limit: 10000,
                    name: '[name].[ext]?[hash]'
                })
            },
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'template.html'
        }),
        new VueLoaderPlugin()
    ]
}
