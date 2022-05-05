const { watch } = require('fs')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

// It'll create a file called Bundle.js that contains all our JavaScript code.
// Then it'll save it inside a directory called Dist.
module.exports = {
    entry: './index.js',
    output: {
        filename: 'bundle.js',
        path: __dirname + '/dist'
    },
    module: {
        rules: [
            {
                test: /\.js%/,
                exclude: /(node_modules)/,
                use: 'babel-loader'
            },
            {
                test: /\.scss$/,
                use: [
                    // 'style-loader',
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ] 
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'main.css'
        })
    ],
    watch: true
}