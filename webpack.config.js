var path = require('path');
var project = require('./package.json');
var node_modules = path.resolve(__dirname, 'node_modules');
var react = path.resolve(node_modules, 'react/dict/react.js');

module.exports = {
    entry:{
        'example':'./src/example.jsx'
    },
    output:{
        path:"./",
        filename:'dist/[name].js',
        chunkFilename:'dist/js/[hash:8].chunk.js'
    },
    module:{
        loaders:[
            {
                test:/\.(jsx)?$/,
                exclude:/(node_modules)/,
                loader: 'babel',
                query:{
                    presets:['es2015', 'stage-0', 'react']
                }
            },
            {
                test:/\.(scss|sass)?$/,
                loader:'style!css!sass'
            },
            {
                test:/\.css?$/,
                loader:'style!css'
            }
        ],
        noParse:[react]
    }
};