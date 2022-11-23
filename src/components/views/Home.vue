<template>
  <div class="home">
    <b-card-group deck class="list">
      <b-card class="item StatByRange text-center">
        <template #header>
          <h6 class="mb-0">구간별 통계</h6>
        </template>
        <b-card-text>
          <div v-for="(item, index) in items" :key="index">
            <BarChart :data="item" />
          </div>
        </b-card-text>
      </b-card>
      <b-card class="item StatByRange tednjsxt-center">
        <template #header>
          <h6 class="mb-0">공 색깔별 통계</h6>
        </template>
        <b-card-text>
          <div v-for="(item, index) in items_doughnut" :key="index">
            <Doughnut :data="item" />
          </div>
        </b-card-text>
      </b-card>
      <b-card class="item StatByRange text-center">
        <template #header>
          <h6 class="mb-0">최다 보너스 번호</h6>
        </template>
        <b-card-text>
          <img src="@/assets/img/lotto-ball-31.png" alt="ball" style="width:90%; margin: auto;">
        </b-card-text>
      </b-card>
    </b-card-group>
    <b-card-group deck class="list">
      <b-card class="item StatByNum text-center">
        <template class="" #header>
          <h6 class="mb-0">번호별 통계</h6>
        </template>
        <div class="row mb-3">
          <div class="col-sm-2 mb-3"> 1번 : </div>
          <div class="col-sm-10 pt-1 mb-3">
          <b-progress :key="'테스트'" :value="25" variant="success" animated striped></b-progress>
          </div>
          <div class="col-sm-2 mb-3"> 2번 : </div>
          <div class="col-sm-10 pt-1 mb-3">
          <b-progress :key="10" :value="50" variant="info" animated striped></b-progress>
          </div>
          <div class="col-sm-2 mb-3"> 3번 : </div>
          <div class="col-sm-10 pt-1 mb-3">
          <b-progress :key="20" :value="75" variant="warning" animated striped></b-progress>
          </div>
          <div class="col-sm-2 mb-3"> 4번 : </div>
          <div class="col-sm-10 pt-1 mb-3">
          <b-progress :key="30" :value="100" variant="danger" animated striped></b-progress>
          </div>
          <div class="col-sm-2 mb-3"> 5번 : </div>
          <div class="col-sm-10 pt-1 mb-3">
          <b-progress :key="40" :value="50" variant="primary" animated striped></b-progress>
          </div>
        </div>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
/* eslint-disable */
import BarChart from '@/components/common/BarChart'
import Doughnut from '@/components/common/DoughnutChart'

export default {
  name: 'Home',
  components: { BarChart, Doughnut },
  data: () => ({
    items: [
      {
        labels: ['1~9', '10~19', '20~29', '30~39', '40~45'],
        datasets: [
          {
            label: '당첨 횟수',
            backgroundColor: ["#FEC202", "#5C62AE", "#E51E1D", "#AAAAAA", "#3EAE81"],
            data: [350, 210, 503, 120, 450]
          }
        ]
      },
    ],
    items_doughnut: [
      {
        labels: ['노랑(1~10)', '파랑(11~20)', '빨강(21~30)', '검정(31~40)', '녹색(41~45)'],
        datasets: [
          {
            label: '당첨 횟수',
            backgroundColor: ["#FEC202", "#5C62AE", "#E51E1D", "#AAAAAA", "#3EAE81"],
            data: [350, 210, 503, 120, 450]
          }
        ]
      },
    ],
  })
}
</script>

<style>
.home{
  width: 80% !important;
  margin: auto !important;
}
.list{
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.item{
  background-color: #FFD8A9 !important;
  min-width: 300px;
  margin: 10px auto;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
}


</style>
