<template lang="pug">
v-app-bar(flat, color='indigo-darken-3', elevation=1)
  v-app-bar-title
    | ELU Lab @ CAU

  router-link.text-white.text-decoration-none(:to="'/' + lang", active-class="indigo-lighten-2")
    v-btn {{isKorean? "소개" : "About"}}
  router-link.text-white.text-decoration-none(:to="'/' + lang + '/Prof./Bugeun/Kim'", active-class="indigo-lighten-2")
    v-btn {{isKorean? "사람들" : "Team" }}
  router-link.text-white.text-decoration-none(:to="'/' + lang + '/pub'", active-class="indigo-lighten-2")
    v-btn {{isKorean? "논문" : "Papers" }}
  router-link.text-white.text-decoration-none(:to="'/' + lang + '/contact'", active-class="indigo-lighten-2")
    v-btn {{isKorean? "문의하기" : "Contact"}}
  v-btn(@click="langChange") [{{isKorean ? "Eng" : "한국어"}}]
</template>

<script>
export default {
  name: "AppBar",
  data () {
    return {
      isKorean: true
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
