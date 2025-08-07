<template lang="pug">
div
  table(style="background:#cecece;height:20vh;width:100%"): tr
    td: img(src="/img/parallex/team.png", style="height:20vh")
    td: .text-white.text-shadow.text-h3.font-weight-black.text-center {{lang === 'ko'? "연구실 사람들" : "Our Team"}}
  v-container
    v-row
      .v-col-12
        h1.text-indigo-accent-2 {{lang === 'ko' ? "현재 구성원" : "Current Members"}}
      .v-col-6.v-col-sm-4.v-col-md-3.v-col-lg-2(v-for="item in presentMembers")
        v-card(elevation=3, rounded, hover, @click="$router.push('/' + lang + '/' + item.path)")
          v-img.align-end(lazy-src='/img/noimg.svg', :src="item.image", aspect-ratio='0.75', cover,
            gradient="to top, rgba(100,100,100,1) 0%, rgba(100,100,100,.5) 15%, rgba(100,100,100,0) 100%" )
            p.ml-3.font-weight-black.text-border-white.text-h6(:class="getColor(item.role)") {{getRole(item.role, lang)}}
            p.ml-3.text-white.font-weight-black.text-border-white.text-h4 {{lang === 'en' ? item.fullName : item.koreanName}}

      .v-col-12(v-if="alumniMembers.length")
        v-divider
        h1.text-indigo-accent-2 {{lang === 'ko' ? "졸업/계약만료 구성원" : "Past Members"}}
      .v-col-6.v-col-sm-4.v-col-md-3.v-col-lg-2(v-for="item in alumniMembers")
        v-card(elevation=3, rounded, hover, @click="$router.push('/' + lang + '/' + item.path)")
          v-img.align-end(lazy-src='/img/noimg.svg', :src="item.image", aspect-ratio='0.75', cover,
            gradient="to top, rgba(100,100,100,1) 0%, rgba(100,100,100,.5) 15%, rgba(100,100,100,0) 100%")
            p.ml-3.font-weight-black.text-border-white.text-h6(:class="getColor(item.role)") {{getRole(item.role, lang)}}
            p.ml-3.text-white.font-weight-black.text-border-white.text-h4 {{lang === 'en' ? item.fullName : item.koreanName}}
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
          image: '/img/members/' + given.toLowerCase().replace(' ', '-') + '-' + family.toLowerCase().replace(' ', '-') + '.jpg',
          path: given + '/' + family,
          isAlumni: status === '졸업' || status === '계약만료'
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
      if (rolename === 'Prof.') return '지도교수'
      if (rolename === 'Researcher') return '연구원'
      if (rolename === 'Ph.D student') return '박사과정'
      if (rolename === 'M.S. student') return '석사과정'
      if (rolename === 'Ph.D.') return '박사'
      if (rolename === 'M.S.') return '석사'
      return '학부연구생'
    },
    getColor(rolename) {
      return 'text-indigo-lighten-4'
      // if (rolename === 'Prof.') return 'text-indigo-lighten-2'
      // if (rolename === 'Researcher') return 'text-indigo-lighten-2'
      // if (rolename === 'Ph.D student') return 'text-amber-lighten-2'
      // if (rolename === 'M.S. student') return 'text-grey-lighten-2'
      // if (rolename === 'Ph.D.') return 'text-amber-lighten-2'
      // if (rolename === 'M.S.') return 'text-grey-lighten-2'
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

<style lang="stylus" scoped>
.text-border-white
  text-shadow #000 0px 0px 1px, #000 0px 0px 1px, #000 0px 0px 1px, #000 0px 0px 1px, white 0 0 2px
</style>
