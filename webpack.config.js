const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
require('dotenv').config();

module.exports = {
	mode: process.env.NODE_ENV,
	entry: './src/js/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Webpack Demo',
			filename: 'index.html',
			minify: true,
			template: './src/index.html',
		}),
		new MiniCssExtractPlugin(),
	],
	devServer: {
		static: {
			directory: path.resolve(__dirname, 'dist'),
		},
		port: process.env.PORT,
		open: false,
		hot: true,
		compress: true,
		historyApiFallback: true,
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader'],
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'],
					},
				},
			},
		],
	},
};
