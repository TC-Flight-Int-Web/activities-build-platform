module.exports = {
    entry:{
        app:'./project/app.jsx'
    },
    output:{
        path:'./build',
        filename:'app.js'
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['', '.js', '.jsx'],
    },
    module:{
        loaders:[
            {
                test: /\.(js|jsx)$/,
                loaders: ['babel'],
            },
            {
                test: /\.css$/,
                loaders: ['style', 'css']
            },
        ]
    }
}