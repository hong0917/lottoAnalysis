<template>
  <div>
    <b-modal id="modal-center" centered title=title>
    <p class="my-4">Vertically centered modal!</p>
    </b-modal>

    <b-modal id="errorModal" title="에러발" ok-only>
    <p>
      This
      <b-button v-b-popover="'Popover inside a modal!'" title="Popover">Button</b-button>
      triggers a popover on click.
    </p>
    <p>
      This <a href="#" v-b-tooltip title="Tooltip in a modal!">Link</a> will show a tooltip on
      hover.
    </p>
    </b-modal>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'Modal',
  data() {
    return {
      title: "테스트 모달타이틀입니다."
    }
  }
  
}
</script>