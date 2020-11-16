<template>
  <footer class='bg-primary'>
    <p>Desenvolvido por Rodolfo Santos - SolucX</p>
  </footer>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class TheFooter extends Vue {

}
</script>

<style lang='scss' scoped>
footer {
  padding: 25px 0;
  text-align: center;
  font-size: 1.2rem;
  color: #fff;
  position: relative;
  top: 75px;
}
</style>
