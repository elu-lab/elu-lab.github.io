<template lang="pug">
v-app-bar(flat, color='indigo-darken-3', elevation=1, density="compact")
  template(v-slot:prepend): v-img(src="/white-LI.png", height="28px", min-width="28px")
  v-app-bar-title
    router-link.text-white.text-decoration-none(:to="'/' + lang", active-class="indigo-lighten-2") ELU Lab @ CAU
  template(v-slot:extension)
    v-spacer
    v-tabs(fixed-tabs, center-active, v-model="tab")
      router-link(v-for="tab in tabs").text-white.text-decoration-none(:to="'/' + lang + tab.path", active-class="indigo-lighten-2")
        v-tab(style="min-width:5em") {{tab[lang]}}
  v-btn(size="small", @click="langChange")
    v-icon.mr-1 mdi-translate
    span {{isKorean? "Eng": "한국어"}}
</template>

<script>
export default {
  name: "AppBar",
  data () {
    return {
      isKorean: false,
      tabs: [
        {path: '', ko: '소개', en: 'About'},
        {path: '/Prof./Bugeun/Kim', ko: '사람들', en: 'Team'},
        {path: '/project', ko: '프로젝트', en: 'Projects'},
        {path: '/pub', ko: '논문', en: 'Papers'},
        {path: '/course', ko: '강의', en: 'Courses'},
        {path: '/contact', ko: '문의하기', en: 'Contact'},
      ],
      tab: ''
    }
  },
  methods: {
    langChange() {
      this.isKorean = !this.isKorean
      if (this.isKorean) this.$router.push({path: this.$route.path.replace('en', 'ko') })
      else this.$router.push({path: this.$route.path.replace('ko', 'en') })
    }
  },
  computed: {
    lang () {
      return this.isKorean ? 'ko' : 'en'
    }
  }
}
</script>
