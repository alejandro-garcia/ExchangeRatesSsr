module.exports = {
   entry: './src/index.js',
   module: {
      loaders: [
         { test: /\.js$/, loader: 'babel-loader',  exclude:/(node_modules|bower_components)/       
         },
         { test: /\.jsx$/, loader: 'babel-loader', exclude:/(node_modules|bower_components)/         
         }
      ]
   },
   output: {
     filename: 'bundle.js',
     path: __dirname + '/public',
   }
}