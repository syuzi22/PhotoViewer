export default {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  transform: {
      "^.+\\.(tsx|ts)?$": "ts-jest" 
  },
    "moduleNameMapper": {
        ".+\\.(css|styl|less|sass|scss|png|jpg|svg|ttf|woff|woff2)$": "identity-obj-proxy"
    },
    "moduleFileExtensions": ["ts", "tsx", "js", "json"],
    "testEnvironment": "jsdom",
    "setupFilesAfterEnv": [
      "<rootDir>/setupTests.ts",
    ]
};