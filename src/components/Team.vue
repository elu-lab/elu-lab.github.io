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

  v-dialog(v-model="dialog", max-width="75vw", max-height="75vh")
    v-card
      v-card-text
        v-row.margin-inside
          .v-col-12.v-col-md-auto
            v-img(lazy-src='/img/placeholder.png', :src="dialogInfo.image", width="250px")
          .v-col-12.v-col-md-auto(v-html="dialogInfo.text")
        v-divider.my-5
        h3 {{lang === 'ko' ? "논문 목록" : "Publications"}}
        v-list(lines="three", density="compact")
          v-list-item(v-for="item in dialogInfo.pubs", active-color="primary", variant="plain", @click="openLink(item)")
            span.mr-2.text-grey(v-for="author in item.AUTHOR") {{author}};
            span.text-grey ({{item.YEAR}})
            p.my-0.py-0 {{item.TITLE}}
            p.mt-0.pt-0.font-italic.text-right.text-grey(v-if="item.type === 'inproceedings'") @ {{item.SERIES}} conference
            p.mt-0.pt-0.font-italic.text-right.text-grey(v-else-if="item.type === 'article'") {{item.JOURNAL}} {{item.VOLUME}}, No. {{item.NUMBER}}
            template(v-slot:append)
              v-icon(size='small', color="green", v-if="item.DOI") mdi-link
              v-icon(size='small', color='grey', v-else) mdi-link-off

  v-row(v-if="presentMembers.length > 1")
    .v-col-12
      h1.text-indigo-accent-2 {{lang === 'ko' ? "현재 구성원" : "Present Members"}}
    .v-col-2(v-for="item in presentMembers")
      v-card.rounded-5(elevation=3, @click="openDialog(item)")
        v-img.align-end(lazy-src='/img/placeholder.png', :src="item.image", aspect-ratio='0.75', cover)
          .d-flex.flex-column.fill-height.justify-center.align-end.text-white.text-shadow
            .font-weight-black.text-h6(v-if="lang === 'en'") {{getRole(item.role, 'en')}} {{item.fullName}}
            .font-weight-black.text-h6(v-else) {{item.koreanName}} {{item.role}}

    .v-col-12(v-if="alumniMembers.length")
      h1.text-indigo-accent-2 {{lang === 'ko' ? "졸업/퇴직한 구성원" : "Alumni Members"}}
    .v-col-2(v-for="item in alumniMembers")
      v-card.rounded-5(elevation=3, @click="openDialog(item)")
        v-img.align-end(lazy-src='/img/placeholder.png', :src="item.image", aspect-ratio='0.75', cover)
          .d-flex.flex-column.fill-height.justify-center.align-end.text-white.text-shadow
            .font-weight-black.text-h6(v-if="lang === 'en'") {{getRole(item.role, 'en')}} {{item.fullName}}
            .font-weight-black.text-h6(v-else) {{item.koreanName}} {{item.role}}
  v-card(v-else, elevation=3)
    v-card-text
      v-row.margin-inside
        .v-col-12.v-col-md-auto
          v-img(lazy-src='/img/placeholder.png', :src="dialogInfo.image", width="250px")
        .v-col-12.v-col-md-auto(v-html="dialogInfo.text")

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
      dialog: false,
      memberSelected: {}
    }
  },
  mounted() {
    httpGet(['data', 'member-list.txt'], (data) => {
      this.members = data.split('\n').map((line) => {
        const [family, given, korean, role, imgtype, status] = line.split(',')
        return {
          familyName: family,
          givenName: given,
          fullName: given + ' ' + family,
          koreanName: korean,
          role: role,
          image: '/img/members/' + given.toLowerCase() + '-' + family.toLowerCase() + '.' + imgtype,
          isAlumni: status === '졸업'
        }
      })
      this.$nextTick(() => {
        if (this.presentMembers.length === 1)
          this.openDialog(this.presentMembers[0], false)
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
      if (lang === 'ko') return rolename
      if (rolename === '교수') return 'Prof.'
      if (rolename === '연구원') return 'Researcher'
      if (rolename === '박사과정') return '(Ph.D student)'
      if (rolename === '석사과정') return '(M.S. student)'
      if (rolename === '박사') return 'Ph.D.'
      if (rolename === '석사') return 'M.S.'
      return '(Undergrad intern)'
    },
    openLink (item) {
      if (item.DOI) window.open('https://doi.org/' + item.DOI)
    },
    openDialog (item, open=true) {
      this.memberSelected = item
      httpGet(['data', 'members', item.givenName.toLowerCase() + '-' + item.familyName.toLowerCase() + '.md'],
        (data) => {
          const [en, ko] = data.split('---')
          this.memberSelected.enText = en
          this.memberSelected.koText = ko
        }, (error) => {})

      this.dialog = open
    }
  },
  computed: {
    presentMembers () {
      return _.filter(this.members, (item) => !item.isAlumni)
    },
    alumniMembers () {
      return _.filter(this.members, (item) => item.isAlumni)
    },
    dialogInfo () {
      if (this.memberSelected.enText)
        return {
          name: this.lang === 'ko' ? this.memberSelected.koreanName : this.memberSelected.fullName,
          text: window.marked.parse(this.lang === 'ko' ? this.memberSelected.koText : this.memberSelected.enText),
          role: this.getRole(this.memberSelected.role, this.lang),
          image: this.memberSelected.image,
          pubs: _.filter(this.publications, (p) => _.includes(p.AUTHOR, this.memberSelected.fullName))
        }
      else return {}
    }
  }
}
</script>

<style lang="stylus">
</style>
