<template>
  <div>
    <div v-if='status === `success` || status === `fail`' 
      data-balloon-length='medium'
      :aria-label='`Coming - ${value}%`'
      data-balloon-pos='up'>
      <div>
        <b-form-input type='range' :value='value' disabled></b-form-input>
        <div class='arrow-fly arrow-fly-bar-coming'></div>
      </div>
    </div>
    <div v-else-if='status === `flying`' 
      data-balloon-length='medium'
      :aria-label='`Going - ${value}%`'
      data-balloon-pos='up'>
      <div >
        <b-form-input type='range' :value='value' disabled></b-form-input>
        <div class='arrow-fly arrow-fly-bar-going'></div>
      </div>
    </div>
    <div v-else 
      data-balloon-length='medium'
      aria-label='Stoped'
      data-balloon-pos='up'>
      <div >
        <b-form-input type='range' class='fly-bar-none' disabled></b-form-input>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FlyBar',
  props: {
    status: {
      type: String,
      default: 'flying',
    },
    value: {
      type: Number,
      default: 50,
    },
  },

};
</script>

<style class='scoped' lang='scss'>

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
  background-color: #007bff;
}

input[type='range'].fly-bar-none:disabled::-webkit-slider-thumb {
  opacity: 0;
}


.arrow-fly-bar-going {
  right: 0;
  border-left: 10px solid #007bff;
}

.arrow-fly-bar-coming {
  left: 0;
  border-right: 10px solid #007bff;
}
</style>