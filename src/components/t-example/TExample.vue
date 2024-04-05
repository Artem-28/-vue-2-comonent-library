<template>
  <div class="t-example"></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TExample',
  props: {},
  setup(props) {
    console.log(props);
    return {};
  },
});
</script>

<style scoped lang="scss"></style>
