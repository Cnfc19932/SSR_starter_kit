const path = require('path');
const nodeModulesPath = path.resolve(__dirname, 'node_modules');

module.exports = {
	entry: path.resolve(__dirname, 'src/server.js'),
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'bundle.js',
	},
	resolve: {
		extensions: ['.js', '.jsx', '.ts', '.tsx'],
	},
	target: 'node',
	node: {
		fs: 'empty',
	},
	mode: 'production',
	module: {
		rules: [
			// ts-loader: конвертируем ts (es6) в js (es6)
			// babel-loader: конвертируем js (es6) в js (es5)
			{
				test: /\.tsx?$/,
				loaders: ['babel-loader', 'ts-loader'],
				exclude: [/node_modules/, nodeModulesPath],
			},
			// babel-loader: конвертируем js (es6) в js (es5)
			{
				test: /\.(jsx?)$/,
				loaders: ['babel-loader'],
				exclude: [/node_modules/, nodeModulesPath],
			}
		]
	},
};
