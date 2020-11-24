<template>
  <section>
    <transition name='fade' mode='out-in' appear>
      <div v-if='loading' key='carregando'>
        <PaginaCarregando/>
      </div>

      <div v-else-if='drones.length > 0' key='lista'>
        <DronesTable :drones='drones'/>
        <DronesList :drones='drones'/>
        <DronesPaginar 
          :dronesTotal='total' 
          :dronesLimit='limit' 
          v-if='total && total > limit'
          key='paginacao'
        />
      </div>

      <div v-else class='text-center mt-4' key='sem-resultados'>
        <p>
            Busca sem resultados. Tente buscar outro termo.
        </p> 
      </div>
    </transition>
  </section>
</template>

<script lang='ts'>
import { Component, Vue, Watch } from 'vue-property-decorator';
import DronesService from '@/services/drones';
import { serialize } from '@/helpers';
import Drone from '@/models/Drone';

import DronesTable from '@/components/Drones/DronesTable.vue';
import DronesList from '@/components/Drones/DronesList.vue';
import DronesPaginar from '@/components/Drones/DronesPaginar.vue';

@Component({
  components: {
    DronesTable,
    DronesList,
    DronesPaginar,
  },
})

export default class DronesTabela extends Vue {
  private drones: Drone[] = [];
  private total: number = 0;
  private page: number = 1;
  private limit: number = 20;
  private noData: boolean = false;
  private loading: boolean = true;

  get url(): string {
    let query: string = serialize(this.$route.query);
    if ( query === '' ) { query =   '&_page=1&_sort=id&_order=asc'; }
    return query;
  }

  public getDrones(): void {
    this.loading = true;
    this.drones = [];

    DronesService.listar(this.limit , this.url).then((response) => {
      this.total = Number(response.headers['x-total-count']);
      this.drones = response.data;
      this.loading = false;
    });
  }

  @Watch('url')
  private urlChanged() {
    this.getDrones();
  }

  private created() {
    this.getDrones();
  }
}

</script>

<style lang='scss' scoped>

</style>