var path = require('path');
const backendUrl = process.env.REACT_APP_BACKEND_URL || 'http://localhost:8080';
module.exports = {
    entry: './src/main/js/app.js',
    devtool: 'eval-source-map',
    cache: true,
    mode: 'development',
    resolve: {
        alias: {
            'stompjs': __dirname + '/node_modules' + '/stompjs/lib/stomp.js',
        }
    },
    output: {
        path: path.resolve(__dirname, 'dist'), // build output in 'dist' for development
        filename: 'bundle.js',
        publicPath: '/', // important for dev-server to serve from root
    },
    module: {
        rules: [
            {
                test: path.join(__dirname, '.'),
                exclude: /(node_modules)/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"]
                    }
                }]
            }
        ]
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'), // serve static files if any
        },
        historyApiFallback: true, // useful for React Router
        proxy: {
            '/api': 'http://backendUrl:8080', // proxy API requests to backend
            '/ws': {
                target: 'http://backendUrl:8080',
                ws: true
            }
        },
        port: 3000,
        hot: true,
        open: true
    }
};
