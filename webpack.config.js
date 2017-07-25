var path = require('path');

const webpack = require('webpack');

module.exports = {
    entry: './src/app.js', // tells Webpack which is the entry point of the app
    output: { // tells webpack there to output the bundle.js file
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    },
    watch: true, // when true, tells webpack to create a new bundle.js on save changes
    module: {
        loaders: [ // tells webpack what compiler to use
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader', //tells webpack to use babel as compiler
                query: { // jsx, es6
                    presets: ['react', 'es2015', 'stage-1']
                }
            }
        ]
    },
    devtool: 'source-map'
}