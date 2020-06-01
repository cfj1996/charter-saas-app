const path = require('path');
const rewireReactHotLoader = require('react-app-rewire-hot-loader')
const {override, fixBabelImports, addLessLoader, addWebpackAlias, useBabelRc, useEslintRc} = require('customize-cra');
// path
const resolveAlias = dir => path.join(__dirname, '.', dir)
const hotLoader = () => (config, env) => {
    return  rewireReactHotLoader(config, env)
}
//生产环境去除console.* functions
const dropConsole = () => {
    return config => {
        if (config.optimization.minimizer) {
            config.optimization.minimizer.forEach(minimizer => {
                if (minimizer.constructor.name === 'TerserPlugin') {
                    minimizer.options.terserOptions.compress.drop_console = true
                }
            })
        }
        return config
    }
}
module.exports = {
    webpack: override(
        fixBabelImports('import', {
            libraryName: 'antd',
            libraryDirectory: 'es',
            style: true
        }),
        addLessLoader({
            lessOptions: {
                noIeCompat: true,
                javascriptEnabled: true,
                modifyVars: {
                    '@primary-color': '#a51d1d'
                },
            }
        }),
        addWebpackAlias({
            '@': resolveAlias('src')
        }),
        useEslintRc(),
        dropConsole(),
        hotLoader(),
        useBabelRc(),
    )
}
