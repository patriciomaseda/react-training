
module.exports = {
  entry: './index.js',

  output: {
    filename: 'bundle.js'
  },

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  module: {
    loaders: [
      {
        exclude: /node_modules/, 
        loader: 'babel-loader?presets[]=es2015&presets[]=react'
      }
    ]
  }
}
