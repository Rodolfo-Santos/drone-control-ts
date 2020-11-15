<template>
  <section>
    <table class='table table-hover text-center' v-if='drones && drones.length > 0' key='tabela-drones'>
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
            <b-link class='id-link' :to='{name: `drone`, params: {id: drone.id}}'>
              {{ drone.id }}  
            </b-link>
          </td>
          <td class='row' colspan='2'>
            <div class='col-3'><img :src='drone.image' :alt='drone.name'></div>
            <b-link class='col-7 client-name text-left' :to='{name: `drone`, params: {id: drone.id}}'>
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
    
    <div v-else-if='drones && drones.length === 0' class='text-center mt-4' key='sem-resultados'>
      <p>
          Busca sem resultados. Tente buscar outro termo.
      </p> 
    </div>

    <div v-else key='carregando'>
      <PaginaCarregando/>
    </div>

    <DronesPaginar 
      :dronesTotal='total' 
      :dronesLimit='limit' 
      v-if='total && total > limit'
      key='paginacao'
      />
  </section>
</template>

<script>
import DronesService from '@/services/drones';

import { serialize } from '@/helpers';
import { mapState } from 'vuex';
import DronesPaginar from '@/components/DronesPaginar';
import BatteryBar from '@/components/BatteryBar';
import FlyBar from '@/components/FlyBar';

export default {
  name: 'DronesTabela',
  components: {
    DronesPaginar,
    BatteryBar,
    FlyBar,
  },

  data() {
    return {
      drones: '',
      total: null,
      page: null,
      limit: 10,
    };
  },

  methods: {
    getDrones() {
      DronesService.listar(this.limit , this.url).then((response) => {
        this.total = Number(response.headers['x-total-count']);
        this.drones = response.data;
      });
    },
  },

  computed: {
    ...mapState(['statusType']),
    url() {
      return serialize(this.$route.query);
    },
  },

  watch: {
    url() {
      this.getDrones();
    },
  },

  created() {
    this.getDrones();
  },
};

</script>

<style lang='scss' scoped>

td {
  vertical-align: middle;
  position: relative;

  span {
    font-size: 1.75em;
  }
}

.id-link {
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  border-radius: 50%;
  text-align: center;

  width: 20px;
  height: 20px;
  cursor: pointer;
  transition: .25s;
  
  &:hover {
    background-color: #007bff;
    color: #fff;
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