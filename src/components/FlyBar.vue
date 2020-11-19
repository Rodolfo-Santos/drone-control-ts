<template>
  <div class="text-center">
    <div v-if='status !== `flying` && status !== `success` && status !== `repair`' 
      data-balloon-length='medium'
      aria-label='Stoped'
      data-balloon-pos='up'>
      <div class='bar-stripped'>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <div v-else-if='value > 50' 
      data-balloon-length='medium'
      :aria-label='`Coming - ${value}`'
      data-balloon-pos='up'>
      <div>
        <b-form-input type='range' :value='value' disabled></b-form-input>
        <div class='arrow-fly arrow-fly-bar-coming'></div>
      </div>
    </div>
    <div v-else 
      data-balloon-length='medium'
      :aria-label='`Going - ${value}%`'
      data-balloon-pos='up'>
      <div >
        <b-form-input type='range' :value='value' disabled></b-form-input>
        <div class='arrow-fly arrow-fly-bar-going'></div>
      </div>
    </div>

  </div>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Flybar extends Vue {
  @Prop() private readonly status!: string;
  @Prop() private readonly value!: number;
}
</script>

<style class='scoped' lang='scss'>
@import '@/scss/helpers/variaveis';

.arrow-fly {
  display: block;
  position: absolute;
  top: 50%;
  transform: translateY(-70%); 
  width: 0; 
  height: 0; 
  border-top: 5px solid transparent;
  border-bottom: 5px solid transparent;
}

input[type='range']:disabled::-webkit-slider-thumb {
  background-color: $cor-padrao;
}

input[type='range'].fly-bar-none:disabled::-webkit-slider-thumb {
  opacity: 0;
}

.arrow-fly-bar-going {
  right: 0;
  border-left: 10px solid $cor-padrao;
}

.arrow-fly-bar-coming {
  left: 0;
  border-right: 10px solid $cor-padrao;
}

.bar-stripped {
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    display: inline-block;
    width: 10px;
    height: 4px;
    background: #ccc;
    margin: 4px;
    animation: dots 0.6s cubic-bezier(0.6, 0.1, 1, 0.4) infinite alternate;
  }
}
</style>