import Sprite from './TIconSprite.vue';
import Vue, { PluginObject } from 'vue';

const Plugin: PluginObject<Plugin> = {
  install() {
    const container = document.body;
    if (!container) return;
    const spriteContainer = document.createElement('div');
    container.appendChild(spriteContainer);
    const sprite = new Vue({
      render: (h) => h(Sprite),
    });
    sprite.$mount?.(spriteContainer);
  },
};

export default Plugin;
