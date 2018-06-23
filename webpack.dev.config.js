var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: [
        './src/index.js',
        './src/less/styles.less'
    ],
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        },{
            test: /\.less$/,
            loaders: ["style-loader", "css-loader", "less-loader"]
        }
        ]
    },
    devtool: "source-map",
    mode: "development",
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './src',
        historyApiFallback: true
    }
}