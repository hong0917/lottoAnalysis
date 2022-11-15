<template>
  <div class="home">
    <b-card-group deck class="list">
      <b-card class="item">
        <template #header>
          <h6 class="mb-0">Header Slot</h6>
        </template>
        <b-card-text>
          <div v-for="(item, index) in items" :key="index">
            <BarChart :data="item" />
          </div>
        </b-card-text>
      </b-card>
      <b-card class="item">
        <b-progress :key="0 - 9 번 " :value="25" variant="success" striped></b-progress>
        <b-progress :key="10 - 19 번 " :value="50" variant="info" striped class="mt-2"></b-progress>
        <b-progress :key="20 - 29 번 " :value="75" variant="warning" striped class="mt-2"></b-progress>
        <b-progress :key="30 - 39 번 " :value="100" variant="danger" striped class="mt-2"></b-progress>
        <b-progress :key="40 - 45 번 " :value="50" variant="primary" striped class="mt-2"></b-progress>
        This is a wider card with supporting text below as a natural lead-in to additional content.
          This content is a little bit longer.
      </b-card>
    </b-card-group>

    <b-card-group deck class="list">
      <b-card class="item">
        <template #header>
          <h6 class="mb-0">Header Slot</h6>
        </template>
        <b-card-text>
          This is a wider card with supporting text below as a natural lead-in to additional content.
          This content is a little bit longer.
        </b-card-text>
      </b-card>
      <b-card class="item">
        <b-card-text>
          This is a wider card with supporting text below as a natural lead-in to additional content.
          This content is a little bit longer.
        </b-card-text>
      </b-card>
      <b-card class="item">
        <b-card-text>
          This is a wider card with supporting text below as a natural lead-in to additional content.
          This content is a little bit longer.
        </b-card-text>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
/* eslint-disable */
import BarChart from '@/components/common/BarChart'

export default {
  name: 'Home',
  components: { BarChart },
  data: () => ({
    items: [
      {
        labels: ['5번', '21번', '38번', '4번', '18번'],
        datasets: [
          {
            label: '로또 당첨 번호',
            backgroundColor: '#3EAE81',
            data: [5, 18, 12, 10, 2]
          }
        ]
      },
    ]
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
}
.item{
  background-color: #FFD8A9 !important;
  margin: 10px;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
}


</style>
