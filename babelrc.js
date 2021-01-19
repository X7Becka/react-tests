const isTest = process.env.NODE_ENV === 'development'
module.exports = {
    presets: [['env', {modules: isTest ? 'commonjs' : false}], 'react'],
    plugins: [
        'syntax-dynamic-import',
        'transform-object-rest-spread',
    ],
}
