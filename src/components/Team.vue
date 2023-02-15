<template lang="pug">
v-container
  h1.text-center.mb-3.text-indigo-darken-4
    v-icon.ma-2(size='small') mdi-account-group
    span {{lang === 'ko'? "연구실 사람들" : "Our Team"}}

  v-banner.my-5(icon="mdi-bullhorn", color="red")
    v-banner-text: p.text-h5.text-red-darken-3
      | 연구실의 첫 학부생 인턴, 석박사과정 학생을 모집하고 있습니다. '문의하기'를 눌러 문의해주세요!
      br
      | We're looking for the first MS/PhD students and interns who are interested in our study!
      br
      | If you're interested in our study, please contact advisor through 'Contact' tab.

  v-row
    .v-col-12
      h1.text-indigo-accent-2 {{lang === 'ko' ? "현재 구성원" : "Present Members"}}
    .v-col-2(v-for="item in presentMembers")
      v-card.rounded-5(elevation=3, @click="$router.push('/' + lang + '/' + item.path)")
        v-img.align-end(lazy-src='/img/placeholder.png', :src="item.image", aspect-ratio='0.75', cover)
        v-card-actions
          .font-weight-black.text-h6(v-if="lang === 'en'") {{getRole(item.role, 'en')}} {{item.fullName}}
          .font-weight-black.text-h6(v-else) {{item.koreanName}} {{item.role}}
          v-spacer
          v-btn(icon="mdi-card-account-details")

    .v-col-12(v-if="alumniMembers.length")
      h1.text-indigo-accent-2 {{lang === 'ko' ? "졸업/퇴직한 구성원" : "Alumni Members"}}
    .v-col-2(v-for="item in alumniMembers")
      v-card.rounded-5(elevation=3, @click="$router.push('/' + lang + '/' + item.path)")
        v-img.align-end(lazy-src='/img/placeholder.png', :src="item.image", aspect-ratio='0.75', cover)
        v-card-actions
          .font-weight-black.text-h6(v-if="lang === 'en'") {{getRole(item.role, 'en')}} {{item.fullName}}
          .font-weight-black.text-h6(v-else) {{item.koreanName}} {{item.role}}
          v-spacer
          v-btn(icon="mdi-card-account-details")
</template>

<script>
import {httpGet, monthParser, nameParser} from "@/util";
import _ from "lodash";
import BibtexParser from "bibtex-parse";


export default {
  name: "Team",
  props: ['lang'],
  data () {
    return {
      members: [],
      publications: [],
    }
  },
  mounted() {
    httpGet(['data', 'member-list.txt'], (data) => {
      this.members = data.split('\n').map((line) => {
        const [family, given, korean, role, status] = line.split(',')
        return {
          familyName: family,
          givenName: given,
          fullName: given + ' ' + family,
          koreanName: korean,
          role: role,
          image: '/img/members/' + given.toLowerCase() + '-' + family.toLowerCase() + '.jpg',
          path: role + '/' + given + '/' + family,
          isAlumni: status === '졸업'
        }
      })
    }, () => {})

    httpGet(['data', 'publications.bib'], (data) => {
      this.publications = _.sortBy(BibtexParser.entries(data).map((item) => {
        item.tags = item.NOTE ? item.NOTE.split(' ') : []
        item.MONTH = monthParser(item.MONTH)
        item.AUTHOR = nameParser(item.AUTHOR)
        return item
      }), [(item) => -item.YEAR, (item) => -item.MONTH])
    }, (error) => {})
  },
  methods: {
    getRole(rolename, lang) {
      if (lang === 'en') return rolename
      if (rolename === 'Prof.') return '교수'
      if (rolename === 'Researcher') return '연구원'
      if (rolename === 'Ph.D student') return '박사과정'
      if (rolename === 'M.S. student') return '석사과정'
      if (rolename === 'Ph.D.') return '박사'
      if (rolename === 'M.S.') return '석사'
      return '학부생 인턴'
    },
    openLink (item) {
      if (item.DOI) window.open('https://doi.org/' + item.DOI)
    }
  },
  computed: {
    presentMembers () {
      return _.filter(this.members, (item) => !item.isAlumni)
    },
    alumniMembers () {
      return _.filter(this.members, (item) => item.isAlumni)
    }
  }
}
</script>

<style lang="stylus">
</style>
