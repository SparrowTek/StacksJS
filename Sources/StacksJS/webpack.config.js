const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: "./index.js" ,
    output: {
        path:  path.resolve(__dirname, ''),
        filename: "Stacks.js",
        library: "StacksJS",
        libraryTarget: "var"
    }, 
    resolve: {
        extensions: ['.ts', '.js'],
        // alias: {
        //     '@stacks/auth': '@stacks/auth/dist/esm',
        //     '@stacks/bns': '@stacks/bns/dist/esm',
        //     '@stacks/common': '@stacks/common/dist/esm',
        //     '@stacks/encryption': '@stacks/encryption/dist/esm',
        //     '@stacks/keychain': '@stacks/keychain/dist/esm',
        //     '@stacks/network': '@stacks/network/dist/esm',
        //     '@stacks/profile': '@stacks/profile/dist/esm',
        //     '@stacks/stacking': '@stacks/stacking/dist/esm',
        //     '@stacks/storage': '@stacks/storage/dist/esm',
        //     '@stacks/transactions': '@stacks/transactions/dist/esm',
        //     '@stacks/wallet-sdk': '@stacks/wallet-sdk/dist/esm',
        // },
        fallback: { 
            "crypto": require.resolve("crypto-browserify"), 
            "stream": require.resolve("stream-browserify"),
            "events": require.resolve("events/"),
            "url": require.resolve("url/"),
            "https": require.resolve("https-browserify"),
            "os": require.resolve("os-browserify/browser"),
            "http": require.resolve("stream-http"),
            "zlib": require.resolve("browserify-zlib"),
            "path": require.resolve("path-browserify"),
            "util": require.resolve("util/"),
            "assert": require.resolve("assert/"),
            "tty": require.resolve("tty-browserify"),
            "process": require.resolve("process/browser"),
        }
    },
    plugins: [
        new webpack.ProvidePlugin({
          Buffer: ['buffer', 'Buffer'],
          process: require.resolve('process/browser'),
        }),
      ].filter(Boolean),
      optimization: {
        minimize: true,
      },
};