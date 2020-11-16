<template>
  <div  class="number-info">
    <span v-for="(val, index) in split" :key="index">{{ val }}</span> {{ unity }}
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';

@Component
export default class  CaseNumber extends Vue {
@Prop() private readonly val!: number;
@Prop() private readonly unity!: string;

get split(): string[]  {
  return this.dotSplit(this.val.toString());
}

public dotSplit(txt: string): string[] {
  const result = txt.split('.');
  if (result.length > 1) { result[0] = result[0] + '.'; }
  return result;
}

}
</script>

<style lang="scss" scoped>

.number-info span {
  font-size: 1.75em;
}

.number-info span:nth-child(2) {
  font-size: 1.30em;
}

</style>