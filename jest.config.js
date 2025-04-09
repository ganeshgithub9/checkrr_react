/** @type {import('ts-jest').JestConfigWithTsJest} */
// module.exports = {
//   testEnvironment: 'jsdom',
//   transform: {
//     '^.+.tsx?$': ['ts-jest', {}]
//   },
//   moduleNameMapper: {
//     '\\.css$': '<rootDir>/src/__mocks__/styleMock.mock.ts',
//     '\\.(jpg|jpeg|png|gif|webp)$': '<rootDir>/src/__mocks__/fileMock.ts',
//     '\\.svg$': '<rootDir>/src/__mocks__/svgMock.ts' // Added SVG mock mapping
//   },
//   setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts']
// };

export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.tsx?$': ['ts-jest', {}]
  },
  moduleNameMapper: {
    // '\\.css$': '<rootDir>/src/__mocks__/styleMock.mock.ts',
    '\\.(jpg|jpeg|png|gif|webp|svg)$': 'jest-transform-stub'
    // '\\.svg$': '<rootDir>/src/__mocks__/svgMock.ts' // Added SVG mock mapping
  },
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts']
};
