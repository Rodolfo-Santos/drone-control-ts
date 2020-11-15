<template>
    <b-row>
    <b-col class='col-2'>
      <b-form-group
        label='Drone ID'
        label-for='input-id'
      >
      <b-form-input
        id='input-id'
        type='number'
        required
        placeholder='ID'
        v-model='busca.id'
        @keyup='buscar'
      ></b-form-input>
      </b-form-group>
    </b-col>

    <b-col class='col-4'>
      <b-form-group
        label='Name'
        label-for='input-name'
      >
      <b-form-input
        id='input-name'
        type='text'
        required
        placeholder='Name'
        v-model='busca.name'
        @keyup='buscar'
      
      ></b-form-input>
      </b-form-group>
    </b-col>

    <b-col class='col-2'>
      <b-form-group
        label='Current Fly'
        label-for='input-currentFly'
      >
      <b-form-input
        id='input-currentFly'
        type='number'
        required
        placeholder='Fly %'
        v-model='busca.fly'
        @keyup='buscar'
        min='0'
        max='100'
      ></b-form-input>
      </b-form-group>
    </b-col>

    <b-col class='col-4'>
      <b-form-group
        label='Status'
        label-for='input-status'
      >
        <b-form-select class='mb-3' v-model='busca.status' id='input-status' @change='buscar'>
          <b-form-select-option selected> Select </b-form-select-option>
          <b-form-select-option 
            :class='`text-${status.color} text-capitalize`' 
            :value='status.status' 
            v-for='status in statusType' 
            :key='status.status'
            > {{ status.name }} </b-form-select-option>
        </b-form-select>
      </b-form-group>
    </b-col>

    <b-col class='col-9'>
    </b-col>
  </b-row>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Buscar',
  data() {
    return {
      busca: {},
    };
  },

  methods: {
    buscar() {
        this.clean(this.busca);
        this.$router.push({query: this.busca});
    },

    clean(obj) {
      for (const propName in obj) {
        if (obj[propName] === null || obj[propName] === undefined || obj[propName] === '') {
          delete obj[propName];
        }
      }
    },
  },

  computed: {
    ...mapState(['statusType']),
  },

};
</script>

<style lang='scss' scoped>

</style>