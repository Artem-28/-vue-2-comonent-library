import { PluginFunction } from 'vue';
import * as components from './components';

const tComponentLibrary: PluginFunction<Plugin> = (instance) => {
  Object.keys(components).forEach(key => instance.use((components as any)[key]));
};

export default tComponentLibrary;

export * from './components';
