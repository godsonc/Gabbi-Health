const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://purple-vest.enyata.com',
    viewportHeight: 1000,
    defaultCommandTimeout: 30000,
    viewportWidth: 1500,
    experimentalStudio: true,
    force: true,
    waitForAnimations: false,
    animationDistanceThreshold: 0
  }
});

