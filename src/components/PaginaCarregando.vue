<template>
  <div class='loading'>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class PaginaCarregando extends Vue {

}
</script>

<style lang='scss' scoped>
@import '@/scss/helpers/variaveis';

.loading {
  text-align: center;
  margin-top: 80px;
  margin-bottom: 80px;

  span {
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 10px;
    background: $cor-secundaria;
    margin: 4px;
    animation: dots 0.6s cubic-bezier(0.6, 0.1, 1, 0.4) infinite alternate;

    &:nth-child(1) {
      animation-delay: 0.1s;
    }

    &:nth-child(2) {
      animation-delay: 0.2s;
    }

    &:nth-child(3) {
      animation-delay: 0.3s;
    }

    &:nth-child(4) {
      animation-delay: 0.4s;
    }
  }
}

@keyframes dots {
  from {
    transform: translate3d(0, 0, 0);
  }
  to {
    transform: translate3d(0, 30px, 0);
  }
}
</style>