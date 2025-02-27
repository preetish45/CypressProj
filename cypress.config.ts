import { defineConfig } from 'cypress';
import { addCucumberPreprocessorPlugin } from '@badeball/cypress-cucumber-preprocessor';
import createBundler from '@bahmutov/cypress-esbuild-preprocessor';
import { createEsbuildPlugin } from '@badeball/cypress-cucumber-preprocessor/esbuild';

async function setupNodeEvents(on: Cypress.PluginEvents, config:Cypress.PluginConfigOptions):Promise<Cypress.PluginConfigOptions> {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await addCucumberPreprocessorPlugin(on, config);

  on("file:preprocessor",
     createBundler({
      plugins:[createEsbuildPlugin(config)],
     })
    );

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

export default defineConfig({
screenshotOnRunFailure:true,
screenshotsFolder:'test-results/screenshots',
videosFolder:'test-results/videos',
trashAssetsBeforeRuns:true,
defaultCommandTimeout: 40000,
requestTimeout: 10000,
pageLoadTimeout: 40000,
viewportWidth: 1920,
viewportHeight: 1080,
projectId: 'dc6111',
chromeWebSecurity: false,

  e2e: {
    specPattern: '**/*.{feature,spec.ts}',
    setupNodeEvents,
    supportFile: 'cypress/support/e2e.ts',
    excludeSpecPattern: ['./feature/Smoke_Tests/','./features/test'],
  },
});
