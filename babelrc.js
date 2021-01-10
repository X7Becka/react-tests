const isTest = String(process.env.NODE_ENV ) === 'test'
module.export = {
    presets: [['env', {modules: isTest ? 'commonjs' : false}], 'react'],
    plugins: [
        'syntax-dynamic-import',
        'transform-object-rest-spread',
    ],
}
