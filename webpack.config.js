const path = require("path");
const includes = [
    path.join(__dirname, '/app'),
    path.join(__dirname, '/types'),
    path.join(__dirname, '/node_modules/angular-adresse-data-gouv-fr')
];
module.exports = {
    entry: './app/main.ts',
    output: {
        filename: 'bundle.js',
        publicPath: '/dist',
        path : path.join(__dirname, '/dist')
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: 'awesome-typescript-loader'
            },
            {
                test: /\.css$/,
                loaders: [ 'style-loader', 'css-loader' ]
            },
            {
                test: /\.html$/,
                loader: 'raw-loader'
            }
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
};