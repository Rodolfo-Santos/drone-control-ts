<template>
<b-row>
  <b-col class="col-12 text-center text-md-right">
    <p>Showing {{ dronesLimit }} of {{dronesTotal}}</p>
  </b-col>
  <b-col class="col-12 pagination">
    <b-pagination-nav :link-gen="query"
    :number-of-pages="totalPages"
      use-router
      pills ></b-pagination-nav>
  </b-col>
</b-row>
</template>

<script>

export default {
  props: {
    dronesLimit: {
      type: Number,
      default: 1,
    },

    dronesTotal: {
      type: Number,
      default: 1,
    },
  },

  methods: {
    query(pageNum) {
      return {
        query: {
          ...this.$route.query,
          _page: pageNum,
        },
      };
    },
  },

  computed: {
    totalPages() {
      const total = this.dronesTotal / this.dronesLimit;
      return (total !== Infinity) ? Math.ceil(total) : 0 ;
    },
  },
};
</script>

<style lang="scss" scoped>
.pagination {
  display: flex;
  justify-content: center;
  @media (min-width: 720px) {
      justify-content: flex-end;
  }
}

</style>