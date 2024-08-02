import path from 'path'
import license from 'rollup-plugin-license'

const version = require('../package.json').version
const banner =
`Ripples library v0.1.0 / https://github.com/gsbm/ripples
Based on Jquery Ripples plugin / https://github.com/sirxemic/jquery.ripples
MIT License
@original_author sirxemic / https://sirxemic.com/
@author gsbm`

export default {
  entry: path.join(__dirname, '../src/main.js'),
  dest: path.join(__dirname, '../dist/ripples.js'),
  format: 'umd',
  plugins: [
    license({
      banner
    })
  ]
}
