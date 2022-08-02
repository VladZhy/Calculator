const path = require('path');

module.exports = {
    mode: 'development',
    entry: './public/src/script.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'public'),
    },
    devServer: {
        static: './public',
        port: 9000
    }
};