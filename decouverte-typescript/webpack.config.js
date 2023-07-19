const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    resolve: {
        extensions: [ '.ts', '.js' ]
    },
    entry: './src/main.ts',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    mode: 'development',
    optimization: {
        noEmitOnErrors: true
    },
    watch: true,
    plugins: [
        new HtmlWebpackPlugin({  // Also generate a test.html
          filename: 'index.html',
          inject: 'body',
          template: 'src/templates/index.html'
        })
    ],
    module: {
        rules: [
          { test: /\.tsx?$/, loader: 'ts-loader' }
        ]
    }
};