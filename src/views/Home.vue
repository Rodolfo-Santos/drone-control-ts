<template>
<b-container class="mt-4">
  <Buscar/>
  <hr>
  <DronesTabela/>
</b-container>
</template>

<script>
import Buscar from '@/components/Buscar';
import DronesTabela from '@/components/DronesTabela';

export default {
  name: 'Home',
  components: {
    Buscar,
    DronesTabela,
  },
};

</script>

<style scoped lang="scss">
 .container {
    font-size: .9em;
 }
</style>
