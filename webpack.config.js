/*
* @Author: AJ  Twiss
* @Date:   2017-02-09 22:39:07
* @Last Modified by:   AJ  Twiss
* @Last Modified time: 2017-02-09 23:21:43
*/

'use strict';

module.exports = {
    entry: "./entry.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.html$/i, loader: "html" },
            { test: /\.css$/, loader: "style!css" }
        ]
    }
};