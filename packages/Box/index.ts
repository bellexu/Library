import { App, Plugin } from 'vue';
import Box from './src/index.vue';

export const BoxPlugin: Plugin = {
  install(app: App) {
    app.component('my-box', Box);
  },
};

export { Box };