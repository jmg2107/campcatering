module.exports = {
 entry: './index.js',
 output: {
    path: './compiled',
    filename: 'index.bundle.js'
 },
 module: {
  loaders: [{
    exclude: /node_modules/,
    loader: 'babel-loader'
  }]
 }
}