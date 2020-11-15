<template>
<b-container class="mt-4">
  <Buscar/>
  <hr>
  <Drones/>
</b-container>
</template>

<script>
import Buscar from '@/components/Buscar';
import Drones from '@/components/Drones';

export default {
  name: 'Home',
  components: {
    Buscar,
    Drones,
  },
};

</script>

<style scoped lang="scss">
 .container {
    font-size: .9em;
 }
</style>
