<template>
  <div 
    data-balloon-length='small'
    :aria-label='`${battery}%`'
    data-balloon-pos='up'>

    <b-progress 
      :value='battery' 
      v-if='battery < 25'
      variant='danger'
      striped 
      animated
      key='success'
      class='battery'
    ></b-progress>

    <b-progress 
      :value='battery' 
      v-else-if='battery < 50'
      variant='warning'
      striped 
      animated
      key='success'
      class='battery'
    ></b-progress>

    <b-progress 
      :value='battery' 
      v-else
      variant='success'
      striped 
      animated
      key='success'
      class='battery'
    ></b-progress>

  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';

@Component
export default class BatteryBar extends Vue {
  @Prop() private readonly battery!: number;

}
</script>

<style scoped lang='scss'>
.battery {
  height: 10px;
}
</style>