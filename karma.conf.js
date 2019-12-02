module.exports = function (config) {
    config.set({
        frameworks: ['jasmine'],
        files: [
            'app/src/js/test.js',
            'app/test/Unit/testSpec.js'
        ],
        preprocessors: {
            'app/src/js/test.js': ['coverage']
        },
        browsers: ['Chrome'],
        // reporters: ['mocha'],
        reporters: ['coverage'],
        logLevel: config.LOG_DEBUG
    })
}