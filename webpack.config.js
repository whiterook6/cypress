"use strict";
let webpack = require('webpack');
let CopyWebpackPlugin = require('copy-webpack-plugin');
let ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: {
		app: [
			'./src/js/app.js',
			'./src/scss/style.scss',
		],
		vendor: [
			'reset-css'
		],
	},
	output: {
		path: __dirname + '/phonegap/www/assets/',
		filename: '[name].js'
	},
	module: {
		rules: [{
	        test: /\.(css|sass|scss)$/,
	        use: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader!sass-loader' })
        }, {
			test: /\.js$/,
			exclude: /(node_modules|config.js)/,
			loader: 'babel-loader',
			query: { cacheDirectory: './node_modules/.cache', presets: ['es2015'] }
		}, {
			test: /\.html$/,
			use: 'html-loader?interpolate'
		}, {
			test: /\.(png|jpg|jpeg|gif)$/,
			use: 'file-loader'
		}, {
			test: /\.(eot|svg|ttf|woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
			use: 'file-loader'
		}]
	},
	plugins: [
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor',
			filename: '[name].js',
			minChunks: function(module) {
				// this assumes your vendor imports exist in the node_modules directory or vendor directory
				return module.context && (module.context.indexOf("node_modules") !== -1); //|| module.context.indexOf("vendor") !== -1);
			}
		}),
		new ExtractTextPlugin({ filename: '[name].css', allChunks: true }),
		new CopyWebpackPlugin([
			{ from: './src/index.html', to: '../../www' },
		]),
	]
};