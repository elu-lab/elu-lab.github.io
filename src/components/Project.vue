<template lang="pug">
div
  table(style="background:#e2f1fb;height:20vh;width:100%"): tr
    td: img(src="/img/parallex/research.png", style="height:20vh")
    td
      .text-black.text-shadow-white.text-h3.font-weight-black(v-if="lang === 'ko'")
        span.d-inline-block.mr-1 연구
        span.d-inline-block 주제
      .text-black.text-shadow-white.text-h3.font-weight-black(v-else)
        span.d-inline-block.mr-1 Research
        span.d-inline-block Themes
  v-dialog(v-model="img", width="75%")
    v-card.pa-2
      v-img(:src="img", cover, width="100%")
  v-container
    v-card.my-2.ma-auto.v-col-12.v-col-md-9.pa-0(v-for="proj in projects", elevation="2")
      v-card-title.bg-grey-lighten-2.text-wrap
        span.font-weight-black {{proj.name}}
        span.float-right.text-body-1 ({{proj.period}})
      v-card-subtitle.my-2.text-wrap {{proj.nameEn}}
      v-card-subtitle.my-2.text-wrap(v-if="proj.funding")
        span {{lang === "ko" ? "연구 지원:": "Funded by:"}}&nbsp; {{proj.funding}}
        span.float-right {{proj.status}}
      .d-block.d-sm-flex.flex-no-wrap.justify-space-between.border-t
        div
          v-card-text
            div.px-3.mx-3(v-html="parseMarkdown(proj.content)")
          v-card-text(v-if="proj.workingWith.length")
            span {{lang === "ko" ? "협력기관:": "Working with:"}}
            v-chip.ml-1.pa-1(v-for="work in proj.workingWith", :color="work.color ? work.color : 'black'", @click="open(work.link)")
              v-avatar(v-if="work.img"): v-img(:src="work.img")
              span.ml-2 {{work.name}}
          v-card-text
            span {{lang === "ko" ? "연구원:": "Researchers:"}}
            v-chip.pa-1.ml-1(v-for="person in proj.people", color="gray-lighten-2", @click="open(personalSiteOf(person))")
              v-avatar: v-img(lazy-src='/img/noimg.svg', :src="imagePathOf(person)", cover)
              span.ml-2 {{person.replace('/', ' ')}}
        v-img.mx-auto.mb-2.mb-sm-0(v-if="proj.img", :src="proj.img", cover, width="40%", min-width="300px", max-width="500px", @click="openDialog(proj.img)")

</template>

<script>
import {httpGet} from "@/util";

export default {
  name: "Project",
  props: ['lang'],
  data () {
    return {
      projects: [],
      img: false
    }
  },
  mounted() {
    httpGet(['data', 'project.json'], (data) => {
      this.projects = data
    }, () => {})
  },
  methods: {
    open(url) {
      window.open(url, '_work')
    },
    openDialog(img) {
      this.img = img
    },
    parseMarkdown(md) {
      return window.marked.parse(md)
    },
    personalSiteOf(person) {
      return '/#/' + this.lang + '/' + person;
    },
    imagePathOf(person) {
      return '/img/members/' + person.toLowerCase().replace(' ', '-').replace('/', '-') + '.jpg'
    }
  }
}
</script>

<style scoped lang="stylus">

</style>
