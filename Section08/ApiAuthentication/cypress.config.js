const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  e2e: {
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    excludeSpecPattern: [
      // '**/1-getting-started/*', 
      // '**/2-advanced-examples/*'
    ],
    
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
