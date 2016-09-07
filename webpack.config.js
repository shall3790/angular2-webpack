var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    
    entry: ['./src/app/main.ts'], 
    output: {
        path: './dist/',
        filename: 'app.bundle.js'
    }, 
    module: {
        loaders: [
            // {
            //     test: /\.ts$/,
            //     exclude: /node_modules/,
            //     loader: 'ts'
            // },
            {
                test: /\.ts$/,
                loaders: ['ts', 'angular2-template-loader']
            },
            {
                test: /\.html$/,
                loader: 'raw-loader'
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                loader: 'file?name=assets/[name].[hash].[ext]'
            },
            
            // {
            //     test: /\.css$/,
            //     //exclude: helpers.root('src', 'app'),
            //     loader: ExtractTextPlugin.extract('style', 'css?sourceMap')
            // },
            {
                test: /\.css$/,
                //include: helpers.root('src', 'app'),
                exclude: /node_modules/,
                loader: 'style-loader!css-loader'
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.ts']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
        // new webpack.ProvidePlugin({   
        //     jQuery: 'jquery',
        //     $: 'jquery',
        //     jquery: 'jquery'
        // })
        ,
        new webpack.ProvidePlugin({
            jQuery: 'jquery',
            $: 'jquery',
            jquery: 'jquery'
        })
  ]
};