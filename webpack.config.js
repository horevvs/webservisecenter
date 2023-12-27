
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { watch } = require('fs')

// const { ClearWebpackPlugin } = require('clean-webpack-plugin')

// const webpack = require('webpack');

module.exports = {
    watch: true,
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 3003
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
        filename: 'main_bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    

    // plugin: [
    //     new HtmlWebpackPlugin({
    //         template: "./Mainindex.html"
    //     }), new ClearWebpackPlugin()
    // ]

    
}


