<template>
  <div>
    <b-row>
      <b-col class='col-12 col-md-2'>
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

      <b-col class='col-12 col-md-4'>
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

      <b-col class='col-12 col-md-2'>
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

      <b-col class='col-12 col-md-4'>
        <b-form-group
          label='Status'
          label-for='input-status'
        >
          <b-form-select class='mb-3' v-model='busca.status' id='input-status' @change='buscar'>
            <b-form-select-option :value="null" selected> </b-form-select-option>
            <b-form-select-option 
              :class='`text-${status.color} text-capitalize`' 
              :value='status.status' 
              v-for='status in statusType' 
              :key='status.status'
              > {{ status.name }} </b-form-select-option>
          </b-form-select>
        </b-form-group>
      </b-col>

      <b-col class='col-12 col-md-9'>
      </b-col>
    </b-row>

    <b-row>
      <b-col>
        <a v-b-toggle.mais-opcoes class="btn-mais-opcoes text-primary">More Options</a>
        <b-collapse id="mais-opcoes" class="mt-2 row">
          <b-col class='col-12 col-md-6'>
            <b-form-group
              label='Search by Letter or Word'
              label-for='input-search'
            >
            <b-form-input
              id='input-search'
              type='text'
              required
              placeholder='Search'
              v-model='busca.q'
              @keyup='buscar'
            
            ></b-form-input>
            </b-form-group>
          </b-col>
          <b-col class='col-12 col-md-4'>
            <b-form-group
              label='Sort by'
              label-for='input-sort-by'
            >
              <b-form-select class='mb-3' v-model='busca._sort' id='input-sort-by' @change='buscar'>
                <b-form-select-option :value="null"> </b-form-select-option>
                <b-form-select-option 
                  v-for='item in sortBy' 
                  :value='item.value' 
                  :key='item.value'
                  > {{ item.name }} </b-form-select-option>
              </b-form-select>
            </b-form-group>
          </b-col>
          <b-col class='col-12 col-md-2'>
            <b-form-group
              label=''
              label-for='input-order-by'
              class="d-flex-center"
            >
              <b-form-checkbox
                id="check-order"
                v-model="busca._order"
                name="check-order"
                value="desc"
                unchecked-value="asc"
                :disabled="orderDisabled"
                @change='buscar'
              >
                Order Desc
              </b-form-checkbox>
            </b-form-group>
          </b-col>
        </b-collapse>
      </b-col>
    </b-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import { mapState } from 'vuex';
import { serialize } from '@/helpers';

@Component({
  computed: mapState(['statusType']),
})
export default class Buscar extends Vue {
  private busca: {} = { _page: '1', _sort: 'id', _order: 'asc' };
  private sortBy: object[] = [
        {
          name: 'Drone ID',
          value: 'id',
        },
        {
          name: 'Name',
          value: 'name',
        },
        {
          name: 'Address',
          value: 'address',
        },
        {
          name: 'Battery',
          value: 'battery',
        },
        {
          name: 'Max Speed',
          value: 'max_speed',
        },
        {
          name: 'Average Speed',
          value: 'average_speed',
        },
        {
          name: 'Status',
          value: 'status',
        },
        {
          name: 'Current Fly',
          value: 'fly',
        },
  ];

  get orderDisabled() {
    if (this.busca === null) {
      return true;
    }
  }

  private buscar(): void {
    this.clean(this.busca);
    if (serialize(this.$route.query) !== serialize(this.busca)) {
      this.$router.push({ query: this.busca });
    }
  }

  private clean(obj: any): void {
    for (const propName in obj) {
      if (obj[propName] === null || obj[propName] === undefined || obj[propName] === '') {
        delete obj[propName];
      }
    }
  }

  private created() {
    this.buscar();
  }
}
</script>

<style lang='scss' scoped>
.btn-mais-opcoes {
  cursor: pointer;
}

</style>