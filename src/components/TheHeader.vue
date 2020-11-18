<template>
  <header class='mb-4'>
    <b-navbar toggleable='lg' type='dark' variant='primary'>
      <b-navbar-brand :to='{name: `home`}'>Drone Control</b-navbar-brand>
    </b-navbar>
  </header>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class TheHeader extends Vue {

}
</script>

<style>

</style>