const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const path = require('path');

module.exports = {
    node: {
        fs: 'empty',
    },
    resolve: {
        modules: [path.join(__dirname, 'src'), 'node_modules'],
        plugins: [new TsconfigPathsPlugin({/* options: see below */})],
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.css', '.scss', '.json'],
    },
};
