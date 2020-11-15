<template>
        <table class='table table-hover text-center d-none d-md-table' key='tabela-drones' responsive>
        <thead class='text-upper'>
          <tr>
            <th>Drone</th>
            <th class='text-left'>Customer</th>
            <th>Batteries</th>
            <th>Max Speed</th>
            <th>Average Speed</th>
            <th>Currently Fly</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for='drone in drones' :key='drone.id' v-show='drone.status'>
            <td>
              <b-link :to='{name: `drone`, params: {id: drone.id}}'>
                {{ drone.id }}  
              </b-link>
            </td>
            <td class='row' colspan='2'>
              <div class='col-12 col-lg-3'><img :src='drone.image' :alt='drone.name'></div>
              <b-link class='col-12 col-lg-7 client-name text-left' :to='{name: `drone`, params: {id: drone.id}}'>
                <div>{{ drone.name }}</div>
                <div>{{ drone.address }}</div>
              </b-link>
            </td>
            <td>
              <BatteryBar :battery='drone.battery'/>
            </td>
            <td>
              <span>{{ drone.max_speed }}</span>m/h
            </td>
            <td>
              <span>{{ drone.average_speed }}</span>m/h
            </td>
            <td class='content-center'>
                <FlyBar :value='drone.fly' :status='drone.status'/>
            </td>
            <td>
              <b-button 
                v-for='status in statusType'
                :key='status.status'
                v-show='drone.status === status.status'
                size='sm' 
                :variant='status.color'
                :disabled='status.disable'
                class='btn-status'
              > {{ status.name }} 
              </b-button>
            </td>
          </tr>
        </tbody>
      </table>
</template>

<script>
import BatteryBar from '@/components/BatteryBar';
import FlyBar from '@/components/FlyBar';
import { mapState } from 'vuex';

export default {
  name: "DronesTable",
  props: {
    drones: {
      type: Array,
      default: {},
    }
  },
  components: {
    BatteryBar,
    FlyBar,
  },

  computed: {
    ...mapState(['statusType']),
  }
}
</script>

<style lang="scss" scoped>

td {
  vertical-align: middle;
  position: relative;

  span {
    font-size: 1.75em;
  }
}

.btn {
  text-transform: uppercase;
  width: 100%;
}

.client-name {
  div:nth-child(1){
    font-size: 2em;
  }

  div:nth-child(2){
    font-size: 1em;
  }
}

.btn-status {
  min-width: 100px;
}


</style>