const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://gabbi-users.enyata.com',
    viewportHeight: 800,
    defaultCommandTimeout: 30000,
    viewportWidth: 800,
    experimentalStudio: true,
    force: true,
    //waitForAnimations: false,
    //animationDistanceThreshold: 0
  }
});

