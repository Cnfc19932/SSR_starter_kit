const path = require('path');
const nodeModulesPath = path.resolve(__dirname, 'node_modules');

module.exports = [
    {
        name: 'client',
        entry: path.resolve(__dirname, 'src/client.tsx'),
        output: {
            path: path.resolve(__dirname, 'public'),
            filename: 'client.bundle.js',
        },
        resolve: {
            extensions: ['.js', '.jsx', '.ts', '.tsx', '.css'],
        },
        target: 'node',
        node: {
            fs: 'empty',
        },
        mode: 'development',
        module: {
            rules: [
                {
                    test: /\.css$/i,
                    exclude: [/node_modules/, nodeModulesPath],
                    use: [
                        'style-loader',
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true,
                                modules: {
                                    localIdentName: '[name]__[local]___[hash:base64:5]',
                                },
                            },
                        }
                    ],
                },
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
    },
    {
        name: 'server',
        entry: path.resolve(__dirname, 'src/server.js'),
        output: {
            path: path.resolve(__dirname, 'build'),
            filename: 'bundle.js',
        },
        resolve: {
            extensions: ['.js', '.jsx', '.ts', '.tsx', '.css'],
        },
        target: 'node',
        node: {
            fs: 'empty',
        },
        mode: 'development',
        module: {
            rules: [
                {
                    test: /\.css$/i,
                    exclude: [/node_modules/, nodeModulesPath],
                    use: [
                        {
                            loader: 'isomorphic-style-loader',
                        },
                        {
                            loader: 'css-loader',
                            options: {
                                modules: {
                                    localIdentName: '[name]__[local]___[hash:base64:5]',
                                },
                                importLoaders: 1,
                                sourceMap: true
                            }
                        },
                    ],
                },
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
    }
];