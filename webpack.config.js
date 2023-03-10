
const path = require('path')


const HtmlWebpackPlugin = require('html-webpack-plugin');


const webpack = require('webpack');

module.exports = {

    devServer: {
        contentBase: path.join(__dirname,'dist'),
        port:3003
    },

    entry: '/main.js',
    module: {
        rules: [
            { test: /\.svg$/, use: 'svg-inline-loader' },
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.(js)$/, use: 'babel-loader' }
        ]
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main_bundle.js'
    },

}


