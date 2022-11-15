/* eslint-disable */
import { Bar } from "vue-chartjs";

export default {
  extends: Bar,
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
