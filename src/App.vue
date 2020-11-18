<template>
  <div id='app'>
    <TheHeader/>
    <transition name="fade" appear mode="out-in">
      <router-view/>
    </transition>
    <TheFooter/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TheHeader from '@/components/TheHeader.vue';
import TheFooter from '@/components/TheFooter.vue';

@Component({
  components: { TheHeader, TheFooter },
})
export default class Home extends Vue {

}
</script>

<style lang='scss'>
@import '@/scss/global';
</style>
