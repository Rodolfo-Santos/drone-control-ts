<template>
  <footer class='mt-4'>
    <p>Desenvolvido por <a href='https://rodolfo-santos.com/' target="_blank">Rodolfo Santos</a> - SolucX</p>
  </footer>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class TheFooter extends Vue {

}
</script>

<style lang='scss' scoped>
@import '@/scss/helpers/variaveis';

footer {
  padding: 25px 0;
  text-align: center;
  font-size: 1em;
  color: #fff;
  background: $cor-padrao;
}
</style>
