<template>
  <div id="home">
    <p>
      A Vue.js component to draw animated circular progress bars!
    </p>
      <vue-circle
        :progress="persent"
        :size="200"
        :reverse="false"
        line-cap="round"
        :fill="fill"
        empty-fill="rgba(0, 0, 0, .1)"
        :animation-start-value="0.0"
        :start-angle="0"
        insert-mode="append"
        :thickness="20"
        :show-percent="true"
        @vue-circle-progress="progress"
        @vue-circle-end="progress_end">
          <p>Slot!</p>
      </vue-circle>
  </div>
</template>

<script>
/* eslint-disable */
import VueCircle from 'vue2-circle-progress'

export default {
  name: 'Home',
  components: {
      VueCircle
    },
    data(){
      return{
        fill : { gradient: [ "green", "blue"] },
        persent: "70"
      }
    },
    methods:{
      progress(event,progress,stepValue){
        console.log(stepValue);
      },
      progress_end(event){
        console.log("Circle progress end");
      }
    }
}
</script>

<style>
</style>
