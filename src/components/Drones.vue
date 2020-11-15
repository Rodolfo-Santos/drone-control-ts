<template>
  <section>
    <div v-if='drones && drones.length > 0'>
      <DronesTable :drones='drones'/>
      <DronesList :drones='drones'/>
    </div>

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

import DronesTable from '@/components/DronesTable';
import DronesList from '@/components/DronesList';

import DronesPaginar from '@/components/DronesPaginar';

export default {
  name: 'DronesTabela',
  components: {
    DronesTable,
    DronesList,
    DronesPaginar,
  },

  data() {
    return {
      drones: '',
      total: null,
      page: null,
      limit: 20,
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

</style>