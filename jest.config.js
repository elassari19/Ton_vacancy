// const config = require('kcd-scripts/jest')

// config.roots = ['<rootDir>']

// config.moduleNameMapper = {
//   '^#src$': '<rootDir>/src/index',
//   '^#src/(.*)$': '<rootDir>/src/$1',
//   '^#testHelpers/(.*)$': '<rootDir>/tests/_helpers/$1',
// }

// config.testEnvironment = 'jsdom'

// config.setupFilesAfterEnv = ['<rootDir>/tests/_setup-env.js']

// config.testMatch.push('<rootDir>/tests/**/*.+(js|jsx|ts|tsx)')

// // Ignore files/dirs starting with an underscore (setup, helper, ...)
// // unless the file ends on `.test.{type}` so that we can add tests of our test utilities.
// config.testPathIgnorePatterns.push('/_.*(?<!\\.test\\.[jt]sx?)$')

// module.exports = config




// const nextJest = require('next/jest')

// const createJestConfig = nextJest({ dir: '.' })

// const customJestConfig = {
//   testEnvironment: 'jsdom',
//   clearMocks: true,
//   moduleDirectories: ['node_modules', 'src'],
//   setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
//   testRegex: '(/__tests__/.*|(\\.|/)test)\\.[jt]sx?$',
// }

// module.exports = createJestConfig(customJestConfig)

const nextJest = require('next/jest')

const createJestConfig = nextJest()
const customJestConfig = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: [
    '@testing-library/jest-dom/extend-expect',
    '@testing-library/react',
  ],
}

module.exports = createJestConfig(customJestConfig)

