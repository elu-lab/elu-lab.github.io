<template lang="pug">
div
  table(style="background:#e2f1fb;height:20vh;width:100%"): tr
    td: img(src="/img/parallex/research.png", style="height:20vh")
    td: .text-black.text-shadow-white.text-h3.font-weight-black {{lang === 'ko'? "연구 주제" : "Research Interests"}}
  v-container
    .text-h6
    .text-h6(v-html="lang === 'ko' ? panel.ko : panel.en")

</template>

<script>
import {httpGet} from "@/util";

export default {
  name: "Project",
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
    httpGet(['data', 'courses.md'], (data) => {
      const [ko, en] = data.split('---')
      this.panel.ko = window.marked.parse(ko)
      this.panel.en = window.marked.parse(en)
    }, () => {})
  }
}
</script>

<style scoped lang="stylus">

</style>
