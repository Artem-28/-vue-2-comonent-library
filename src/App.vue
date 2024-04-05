<template>
  <div id="app">
    <t-icon name="burger" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import TIcon from '@/components/t-icon/TIcon.vue';

export default Vue.extend({
  name: 'App',
  components: { TIcon },
});
</script>

<style lang="scss">
</style>
