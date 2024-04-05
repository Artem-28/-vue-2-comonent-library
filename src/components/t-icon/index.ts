import { PluginObject } from 'vue';
import Component from './TIcon.vue';
import Sprite from './sprite';

const Plugin: PluginObject<Plugin> = {
  install(vue) {
    vue.component(Component.name, Component);
    vue.use(Sprite);
  },
};

export default Plugin;

export { Component as TIcon };
