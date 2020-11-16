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

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';

import DronesService from '@/services/drones';
import { serialize } from '@/helpers';

import DronesTable from '@/components/DronesTable.vue';
import DronesList from '@/components/DronesList.vue';

import DronesPaginar from '@/components/DronesPaginar.vue';

@Component({
  components: {
    DronesTable,
    DronesList,
    DronesPaginar,
  },
})

export default class DronesTabela extends Vue {
  private drones: [] = [];
  private total: number = 0;
  private page: number = 1;
  private limit: number = 20;

  get url(): string {
    return serialize(this.$route.query);
  }

  public getDrones(): void {
    DronesService.listar(this.limit , this.url).then((response) => {
      this.total = Number(response.headers['x-total-count']);
      this.drones = response.data;
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