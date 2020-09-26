const path = require('path')
const esbuild = require('esbuild')
const { builtinModules } = require('module')

const pkg = require(path.resolve('package.json'))
const config = require(path.resolve('jest.esbuild'))

const external = [
  ...builtinModules,
  ...Object.keys(pkg.dependencies || {}),
  ...Object.keys(pkg.devDependencies || {}),
  ...Object.keys(pkg.peerDependencies || {}),
]

module.exports = {
  process(content, filename) {
    const { outputFiles } = esbuild.buildSync({
      entryPoints: [ filename ],
      outdir: './dist',
      minify: false,
      bundle: true,
      write: false,
      sourcemap: true,
      ...config,
      external
    })

    return outputFiles.reduce((cur, item) => {
      const key = item.path.includes('.map') ? 'map' : 'code'
      cur[key] = Buffer.from(item.contents).toString()
      return cur
    }, {})
  },
}