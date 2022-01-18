const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
      index: './src/js/index.js',
      validation: './src/js/validation.js',
      keyValidation: './src/js/keyValidation.js',
      inlineFeedback: './src/js/inlineFeedback.js',
      formFeedback: './src/js/formFeedback.js',
      firebase: './src/js/firebase.js'
    }, 
    output: {
        filename:'[name].bundle.js',
        path:path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [ 
            {
                test:/\.scss$/,
                use:[
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/i,
                type: 'asset/resource',
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template:'./src/index.html',
            filename:'index.html',
            inject:'body',
        })
    ],
}