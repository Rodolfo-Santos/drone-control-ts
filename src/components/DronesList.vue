<template>
  <div class="drone-list-cards d-md-none">
    <b-card class='card-profile mb-4' v-for="drone in drones" :key="drone.id">
        <div class="id-drone id-card"> {{drone.id}} </div>
         <b-link :to='{name: `drone`, params: {id: drone.id}}'>
           <div>
             <div class="card-title">{{ drone.name }}</div>
             <div class="card-subtitle">{{ drone.address }}</div>
           </div>
          </b-link>
        <img :src='drone.image' :alt='drone.name'>
        <hr>
        <b-card-text>
          <b-row>
            <b-col>
              <b-row class='mb-4'>
                <b-col cols='12' >
                  <div class='mb-1'> <b-icon-battery-charging></b-icon-battery-charging> Battery</div>
                  <BatteryBar :battery='drone.battery'/>
                </b-col>
              </b-row>
              <b-row class='mb-4'>
                <b-col cols='6' >
                  <div class='mb-1'> <b-icon-clock-fill></b-icon-clock-fill> Max Speed</div>
                  <div class='number-info'>
                    <CaseNumber :val="drone.max_speed" unity="m/h"/>
                  </div>
                </b-col>
                <b-col cols='6' >
                  <div class='mb-1'> <b-icon-clock-fill></b-icon-clock-fill> Average Speed</div>
                  <CaseNumber :val="drone.average_speed" unity="m/h"/> 
                </b-col>
              </b-row>
              <b-row class='mb-4'>
                <b-col cols='12' >
                  <div class='mb-1'> <b-icon-cursor-fill></b-icon-cursor-fill> Current Fly</div>
                  <FlyBar :value='drone.fly' :status='drone.status'/>
                </b-col>
              </b-row>
              <b-row class='mb-4'>
                <b-col cols='12' >
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
                </b-col>
              </b-row>
            </b-col>
          </b-row>
        </b-card-text>
    </b-card>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';

import BatteryBar from '@/components/BatteryBar.vue';
import FlyBar from '@/components/FlyBar.vue';
import CaseNumber from '@/components/CaseNumber.vue';
import { mapState } from 'vuex';

import { dotSplit } from '@/helpers';

@Component({
  components: {
    BatteryBar,
    FlyBar,
    CaseNumber,
  },
  computed: mapState(['statusType']),
})
export default class DronesTable extends Vue {
  @Prop() private readonly drones!: [];
  private statusType!: [];
}

</script>

<style lang="scss" scoped>

.card-title {
  font-size: 2em;
  font-weight: bold;
  line-height: 1em;
}

.text-status {
  font-size: 2em;
}

.img-side {
  width: 100%;
  padding: 0 50px;
}

.id-drone {
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 0px;
  left: 20px;
  transform: translate(-50%, -50%);
  
  width: 50px;
  height: 25px;

  text-align: center;
  cursor: pointer;
  transition: .25s;

  background-color: #007bff;
  color: #fff;
}

.card-profile {
  position: relative;
  img {
    position: absolute;
    top: 20px;
    right: 20px;
  }
}

.number-info span {
  font-size: 2em;
}

.btn {
  text-transform: uppercase;
  width: 100%;
}

</style>