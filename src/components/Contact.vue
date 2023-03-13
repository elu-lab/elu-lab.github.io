<template lang="pug">
v-container
  v-row.mt-6
    v-card.v-col-12.v-col-md-6
      v-card-title: h2 {{lang === 'ko' ? "위치" : "Location"}}
      v-card-text
        .text-center.text-h5(v-if="lang === 'ko'")
          span 중앙대학교 310관 428호
          p.text-grey.text-body-1 서울시 동작구 흑석로 84 (우) 06974
        .text-center.text-h5(v-else)
          span Room #428, Building #310, Chung-Ang University
          p.text-grey.text-body-1 84, Heukseok-ro, Dongjak-gu, Seoul 06974, Republic of Korea
        br
        v-img(src="https://www.cau.ac.kr/cau/img/about/caupusmap/map.png")
    v-card.v-col-12.v-col-md-6
      v-card-text
        h2(v-if="lang === 'ko'") 학부 인턴, 석박사과정 학생 모집중
        h2(v-else) Recruit: Internship/MS & Ph.D students
      v-card-text.margin-inside(v-html="lang === 'ko' ? panel.ko : panel.en")
</template>

<script>
import {httpGet} from "@/util";

export default {
  name: "Contact",
  props: ['lang'],
  data () {
    return {
      panel: {
        ko: '',
        en: ''
      }
    }
  },
  mounted() {
    httpGet(['data', 'panels.md'], (data) => {
      const [ko, en] = data.split('---')
      this.panel.ko = window.marked.parse(ko)
      this.panel.en = window.marked.parse(en)
    }, () => {})
  }
}
</script>

<style scoped lang="stylus">

</style>
