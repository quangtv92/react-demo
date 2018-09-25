import path from 'path'
import webpack from 'webpack'

import common from './webpack.common'

const rootDir = path.resolve(__dirname, '../..')

export default common({
  mode: 'development',
  entry: {
    app: [
      path.join(rootDir, 'src/app/index.js'),
      'webpack-hot-middleware/client?reload=true'
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
      PRODUCTION: JSON.stringify(false)
    }),
    new webpack.HotModuleReplacementPlugin(),
  ]
})
