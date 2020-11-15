<template>
<div class="pagination">
  <div class="mr-5">
    <p>Mostrando {{ dronesLimit }} de {{dronesTotal}}</p>
  </div>
  <b-pagination-nav :link-gen="query"
   :number-of-pages="totalPages"
    use-router
    pills ></b-pagination-nav>
</div>
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
  align-items: center;
  justify-content: flex-end;
}

</style>