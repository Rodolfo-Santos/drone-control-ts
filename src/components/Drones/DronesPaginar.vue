<template>
<b-row>
  <b-col class='col-12 text-center text-md-right'>
    <p>Showing {{ dronesLimit }} of {{dronesTotal}}</p>
  </b-col>
  <b-col class='col-12 pagination'>
    <b-pagination-nav :link-gen='query'
    :number-of-pages='totalPages'
      use-router
      pills ></b-pagination-nav>
  </b-col>
</b-row>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class DronesPaginar extends Vue {
  @Prop() private readonly dronesLimit!: number;
  @Prop() private readonly dronesTotal!: number;

  get totalPages() {
      const total = this.dronesTotal / this.dronesLimit;
      return (total !== Infinity) ? Math.ceil(total) : 0 ;
  }

  private query(pageNum: number): {} {
    return {
      query: {
        ...this.$route.query,
        _page: pageNum,
      },
    };
  }
}
</script>

<style lang='scss' scoped>
@import '@/scss/helpers/variaveis';

.pagination {
  display: flex;
  justify-content: center;
  @media (min-width: 720px) {
      justify-content: flex-end;
  }
}

</style>