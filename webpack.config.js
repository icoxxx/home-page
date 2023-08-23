const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'src/index.js'),
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, 'dist'),
        assetModuleFilename: '[name][ext]',
    },
    mode: 'development',
    devtool: 'source-map',
    devServer: {
        static: {
          directory: path.join(__dirname, 'dist'),
        },
        watchFiles: {
          paths: ['src/**/*.*'],
          options: {
            usePolling: true,
          },
        },
      },
    module: {
        rules:[
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            }
        ]
    }
};
