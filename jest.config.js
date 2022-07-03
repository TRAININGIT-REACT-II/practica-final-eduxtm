module.exports = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  // Importación de ficheros de estilos como valores vacíos
  moduleNameMapper: {
    "\\.(css|less|sass)$": "<rootDir>/__mocks__/styleMock.js",
  },
};
