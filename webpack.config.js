
const ExtractTextPlugin = require( 'extract-text-webpack-plugin' )
const LiveReloadPlugin  = require( 'webpack-livereload-plugin' )

module.exports = {
    entry: {
        app: './src/app.jsx'
    },
    module: {
        rules: [ {
            use: [ {
                loader: 'babel-loader',
                options: {
                    presets: [
                        'es2015',
                        'react'
                    ]
                }
            } ],
            test: /\.jsx$/,
        }, {
            use: ExtractTextPlugin.extract( {
                fallback: 'style-loader',
                use: 'css-loader?modules=true&root=.'
            } ),
            test: /\.css$/
        } ]
    },
    output: {
        filename: '[name].bundle.js',
        path: './dist'
    },
    plugins: [
        new ExtractTextPlugin( '[name].bundle.css' ),
        new LiveReloadPlugin( )
    ]
}