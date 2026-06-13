<template lang="pug">
div
  table(style="background:#eaf1f9;height:20vh;width:100%"): tr
    td: .text-black.text-shadow-white.text-h3.font-weight-black.text-center {{lang === 'ko'? "문의/지원" : "Contact"}}
    td.text-right: img(src="/img/parallex/contact.png", style="height:20vh")
  v-container
    v-row.mt-6
      .v-col-12.v-col-md-6
        v-card
          v-card-title: h2 {{lang === 'ko' ? "위치" : "Location"}}
          v-card-text
            .text-center.text-h5(v-if="lang === 'ko'")
              span 중앙대학교 208관 111호
              p.text-grey.text-body-1 서울시 동작구 흑석로 84 (우) 06974
            .text-center.text-h5(v-else)
              span Room #111, Building #208, Chung-Ang University
              p.text-grey.text-body-1 84, Heukseok-ro, Dongjak-gu, Seoul 06974, Republic of Korea
            br
            Map
      v-img(src="https://www.cau.ac.kr/cau/img/about/caupusmap/map.png")
      .v-col-12.v-col-md-6
        v-card(height="100%")
          v-card-text
            h2(v-if="lang === 'ko'") 학부 인턴, 석박사과정 학생 모집중
            h2(v-else) Recruit: Undergraudate Intern / MS & Ph.D students
          v-card-text.margin-inside(v-html="lang === 'ko' ? panel.ko : panel.en")
    v-card.my-2.d-block
      v-card-title {{lang === 'ko' ? '분야별 지원서' : 'Area-specific application forms'}}
      v-card-text
        p.mb-2.font-weight-light {{lang === 'ko' ? '관심 분야의 링크로 지원해주세요. (2026 여름·2학기 모집)' : "Please apply through the link for the area you're interested in. (Summer & Fall 2026)"}}
        ul.mx-5
          li.my-1
            span.font-weight-medium AI for Science:&nbsp;
            a(href="https://forms.gle/afmFA533PQU24q719") {{lang === 'ko' ? '지원서' : 'Apply'}}
          li.my-1
            span.font-weight-medium AIGT:&nbsp;
            a(href="https://forms.gle/XbQbvrGMFd26j4sv6") {{lang === 'ko' ? '지원서' : 'Apply'}}
          li.my-1
            span.font-weight-medium Speech and Audio (SpeechLMs):&nbsp;
            a(href="https://forms.gle/3WPmVfz2QTEr5xQ5A") {{lang === 'ko' ? '지원서' : 'Apply'}}
</template>

<script>
import {httpGet} from "@/util";
import Map from "./Map.vue";

export default {
  name: "Contact",
  components: { Map },
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
