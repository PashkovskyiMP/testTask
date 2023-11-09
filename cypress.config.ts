import {addCucumberPreprocessorPlugin} from '@badeball/cypress-cucumber-preprocessor';
import browserify from '@badeball/cypress-cucumber-preprocessor/browserify';

import {defineConfig} from 'cypress';

async function setupNodeEvents(
    on: Cypress.PluginEvents,
    config: Cypress.PluginConfigOptions
): Promise<Cypress.PluginConfigOptions> {
    await addCucumberPreprocessorPlugin(on, config);

    on(
        'file:preprocessor',
        browserify(config, {
            typescript: require.resolve('typescript')
        })
    );
    return config;
}

export default defineConfig({
    e2e: {
        setupNodeEvents,
        video: true,
        downloadsFolder: './tmp',
        screenshotsFolder: './tmp',
        videosFolder: './tmp',
        chromeWebSecurity: false,
        defaultCommandTimeout: 30000,
        pageLoadTimeout: 60000,
        viewportHeight: 1080,
        viewportWidth: 1920,
        specPattern: ['**/*.feature'],
        env: {
            testUrl: 'https://todomvc.com/examples/react/#/',
        }
    }
});
