module.exports = {
    transform: {
        '^.+\\.js$': 'babel-jest'
    },
    moduleFileExtensions: ['js'],
    testEnvironment: 'node',
    moduleNameMapper: {
        '^(\\.{1,2}/.*)\\.js$': '$1'
    }
};