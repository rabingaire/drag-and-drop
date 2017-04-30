const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: './src',
    output: {
        path : __dirname,
        filename: 'bundle.js'
    }, 
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        { loader: "css-loader" },
                        { 
                            loader: "sass-loader",
                            options: {
                                includePaths: [__dirname, './src/styles/']
                            } 
                        }
                    ]
                })
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env', 'es2015', 'stage-0', 'react'],
                        plugins: ['transform-runtime']
                    }
                }
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('bundle.css')
    ],
};