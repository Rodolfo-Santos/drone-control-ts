<template>
<b-container class="mt-4">
  <Buscar/>
  <hr>
  <Drones/>
</b-container>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import Buscar from '@/components/Buscar.vue';
import Drones from '@/components/Drones/Drones.vue';

@Component({
  components: {
    Buscar,
    Drones,
  },
})
export default class Home extends Vue {

}

</script>

<style scoped lang="scss">
 .container {
    font-size: .9em;
 }
</style>
