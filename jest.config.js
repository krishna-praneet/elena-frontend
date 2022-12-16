module.exports = {
    verbose: true,
    setupFilesAfterEnv: ["<rootDir>src/setupTests.js"],
    moduleFileExtensions: ["js", "jsx"],
    moduleDirectories: ["node_modules", "src"],
    moduleNameMapper: {
        "\\.(css|less|scss)$": "identity-obj-proxy"
    },
    transform: {
        "^.+\\.(js|jsx)$": "babel-jest"
    }
};