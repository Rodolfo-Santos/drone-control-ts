<template>
  <b-container>
    <div>
      <b-card :title='drone.name' :sub-title='drone.address' class='card-profile'>
        <img :src='drone.image' :alt='drone.name'>
        <hr>
        <b-card-text>
          <b-row>
            <b-col >
              <b-row class='mb-4'>
                <b-col cols='12' >
                  <div class='mb-1'> <b-icon-battery-charging></b-icon-battery-charging> Battery</div>
                  <BatteryBar :battery='drone.battery'/>
                </b-col>
              </b-row>
              <b-row class='mb-4'>
                <b-col cols='6' >
                  <div class='mb-1'> <b-icon-clock-fill></b-icon-clock-fill> Max Speed</div>
                  <div class='number-info'><span>{{ drone.max_speed }}</span>m/h</div>
                </b-col>
                <b-col cols='6' >
                  <div class='mb-1'> <b-icon-clock-fill></b-icon-clock-fill> Average Speed</div>
                  <div class='number-info'><span>{{ drone.average_speed }}</span>m/h</div>
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
                  <div class='mb-1'> <b-icon-cursor></b-icon-cursor> Status </div>
                  <div 
                    v-for='status in statusType'
                    :key='status.status'
                    v-show='drone.status === status.status'
                    :class='`text-${status.color} text-status`'
                    :disabled='status.disable'
                    class='btn-status'
                  > {{ status.name }} 
                </div>
                </b-col>
              </b-row>
            </b-col>
            <b-col>
              <img src='@/assets/drone-img.svg' alt='Woman and Drone' class='img-side'>
            </b-col>
          </b-row>
        </b-card-text>

        <a href='#' class='card-link'>Editar</a>
        <b-link href='#' class='card-link'>Excluir</b-link>
      </b-card>
    </div>
  </b-container>
</template>

<script>
import DronesService from '@/services/drones';
import { mapState } from 'vuex';

import BatteryBar from '@/components/BatteryBar';
import FlyBar from '@/components/FlyBar';

export default {
  name: 'Drones',
  props: ['id'],

  components: {
    BatteryBar,
    FlyBar,
  },

  data() {
    return {
        drone: {},
    };
  },

  methods: {
    getDrone() {
      DronesService.drone_unico(this.id).then( (response) => {
        this.drone = response.data;
      });

    },
  },

  computed: {
    ...mapState(['statusType']),
  },

  created() {
    this.getDrone();
  },
};

</script>

<style lang='scss' scoped>

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

.text-status {
  font-size: 2em;
}

.img-side {
  width: 100%;
  padding: 0 50px;
}

</style>