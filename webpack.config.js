const path = require('path');

module.exports = {
    entry: './assets/javascript_files/index.js',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'assets/html_files'),
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                use: 'asset/resource',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                use: 'asset/resource',
            }
        ]
    }
}