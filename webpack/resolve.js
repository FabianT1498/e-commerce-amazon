const path = require('path')

module.exports = {
  modules: [path.join(__dirname, '..', 'src'), path.join(__dirname, '..', 'node_modules')],
  extensions: ['.js'],
  alias: {
    _app: path.resolve(__dirname, '..', 'src'),
    _components: path.resolve(__dirname, '..', 'src/components/'),
    _context: path.resolve(__dirname, '..', 'src/context/'),
    _views: path.resolve(__dirname, '..', 'src/views/'),
    _utilities: path.resolve(__dirname, '..', 'src/utilities'),
  },
}
