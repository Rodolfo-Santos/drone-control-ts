<template>
  <b-container>
    <transition name="fade" appear="" mode="out-in">
      <div v-if="loading" key='carregando'>
        <PaginaCarregando/>
      </div>

      <b-card :title='drone.name' :sub-title='drone.address' class='card-profile' v-else-if="drone.id">
        <img :src='drone.image' :alt='drone.name'>
        <hr>
        <b-card-text>
          <b-row>
            <b-col class="col-12 col-md-6">
              <b-row class='mb-4'>
                <b-col cols='12' >
                  <div class='mb-1'> <b-icon-battery-charging></b-icon-battery-charging> Battery</div>
                  <BatteryBar :battery='drone.battery'/>
                </b-col>
              </b-row>
              <b-row class='mb-4'>
                <b-col cols='6' >
                  <div class='mb-1'> <b-icon-clock-fill></b-icon-clock-fill> Max Speed</div>
                  <CaseNumber :val="drone.max_speed" unity="m/h"/>
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
            <b-col class="d-none d-md-block">
              <img src='@/assets/drone-img.svg' alt='Woman and Drone' class='img-side'>
            </b-col>
          </b-row>
        </b-card-text>

        <b-button v-b-modal.modal-edit variant="warning" class="mr-3">Edit</b-button>
        <b-button v-b-modal.modal-delete variant="danger">Delete</b-button>

      </b-card>
    </transition>

    <b-modal id="modal-edit" title="Edit Drone"
      @ok="updateDrone"
      >
      <form ref="form" @submit.stop.prevent="handleSubmit">
        <b-form-group
          label="Name"
          label-for="name-input"
          invalid-feedback="Name is required"
        >
          <b-form-input
            id="name-input"
            v-model="droneEdit.name"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          label="Address"
          label-for="address-input"
          invalid-feedback="Address is required"
        >
          <b-form-input
            id="address-input"
            v-model="droneEdit.address"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          label='Status'
          label-for='input-status'
        >
          <b-form-select class='mb-3' v-model='droneEdit.status' id='input-status'>
            <b-form-select-option 
              :class='`text-${status.color} text-capitalize`' 
              :value='status.status' 
              v-for='status in statusType' 
              :key='status.status'
              > {{ status.name }} </b-form-select-option>
          </b-form-select>
        </b-form-group>
      </form>
    </b-modal>

    <b-modal id="modal-delete" title="Are you Sure?" @ok="deleteDrone">
      Do you really want to delete this drone?
    </b-modal>

    <b-modal id="modal-confirm-delete" title="Successfully" ok-only 
      @hidden="$router.push({name: 'home'})"
      @ok="$router.push({name: 'home'})"> 
      Drone successfully deleted!
    </b-modal>
  </b-container>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import DronesService from '@/services/drones';
import { mapState } from 'vuex';
import Drone from '@/models/Drone';

import BatteryBar from '@/components/BatteryBar.vue';
import FlyBar from '@/components/FlyBar.vue';
import CaseNumber from '@/components/CaseNumber.vue';
@Component({
  components: {
    BatteryBar,
    FlyBar,
    CaseNumber,
  },
  computed: mapState(['statusType']),
})

export default class Drones extends Vue {
  @Prop() private readonly id !: number;
  private drone!: Drone;
  private droneEdit: Drone = new Drone();
  private loading: boolean = true;

  private getDrone(): void {
    this.loading = true;
    DronesService.drone_unico(this.id).then( (response) => {
      this.drone = response.data;
      this.droneEdit = {...response.data};
      this.loading = false;
    });
  }

  private deleteDrone(): void {
    DronesService.deletar(this.id).then( () => {
      this.$bvModal.show('modal-confirm-delete');
    });
  }

  private updateDrone(): void {
    DronesService.atualizar(this.id, this.droneEdit).then( (response) => {
      this.getDrone();
    });
  }

  private created() {
    this.getDrone();
  }
}

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