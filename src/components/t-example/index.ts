import { PluginObject } from 'vue';
import Component from './TExample.vue';

const Plugin: PluginObject<Plugin> = {
  install(vue) {
    vue.component(Component.name, Component);
  },
};

export default Plugin;

export { Component as TExample };
