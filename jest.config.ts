import type {Config} from '@jest/types'

const config:Config.InitialOptions = {
    roots: [
        "<rootDir>/src", "<rootDir>/test"
    ],
    transform: {
        "^.+\\.tsx?$": "ts-jest"
    },
    setupFilesAfterEnv: [
        "@testing-library/jest-dom/extend-expect"
    ],
    testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
    testEnvironment: "jsdom",
    collectCoverage: true,
    collectCoverageFrom: [
        "src/**/*.{ts,tsx}",
        "!src/services/**",
        "!src/react-app-env.d.ts"
    ]
}
 /*istanbul ignore file */
export default config;