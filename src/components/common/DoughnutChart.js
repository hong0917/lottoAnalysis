/* eslint-disable */
import { Doughnut } from 'vue-chartjs'

export default {
  extends: Doughnut,
  props: {
    data: Array
  },
  mounted() {
    this.renderChart(this.data, {
      responsive: true,
      maintainAspectRatio: false,
      tooltips: {
        type: "index",
        intersect: false
      },
      hover: {
        type: "nearest"
      }
    });
  }
};