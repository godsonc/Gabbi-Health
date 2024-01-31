const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://gabbi-users.enyata.com',
    viewportHeight: 550,
    defaultCommandTimeout: 30000,
    viewportWidth: 660,
    experimentalStudio: true
  }
});

