<template>
  <div id='app'>
    <TheHeader/>
    <router-view/>
    <TheFooter/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TheHeader from '@/components/TheHeader.vue';
import TheFooter from '@/components/TheFooter.vue';

export default {
  name: 'Home',
  components: { TheHeader, TheFooter },
};
</script>

<style lang='scss'>
@import '@/scss/global';
</style>
