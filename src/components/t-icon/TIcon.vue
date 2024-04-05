<template>
  <i class="t-icon" :style="rootStyles">
    <svg>
      <use :xlink:href="`#${name}`" />
    </svg>
  </i>
</template>

<script lang="ts">
import { defineComponent, ref, PropType } from 'vue';
import { IconName } from '@/types/component-types';

export default defineComponent({
  name: 'TIcon',
  props: {
    name: {
      type: String as PropType<keyof IconName>,
      required: true,
    },
    size: {
      type: Number,
      default: 24,
    },
  },
  setup(props) {
    const rootStyles = ref<Partial<CSSStyleDeclaration>>({
      width: `${props.size}px`,
      height: `${props.size}px`,
    });

    return {
      rootStyles,
    };
  },
});
</script>
