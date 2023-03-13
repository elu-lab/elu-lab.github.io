<template lang="pug">
v-container
  h1.text-center.mb-3.text-indigo-darken-4
    v-icon.ma-2(size='small') mdi-account-group
    span {{lang === 'ko'? "연구실 사람들" : "Our Team"}}

  v-banner.my-5(icon="mdi-bullhorn", color="red")
    v-banner-text: p.text-h6.text-red-darken-3
      | 연구실의 첫 학부생 인턴, 석박사과정 학생을 모집하고 있습니다. '문의하기'를 눌러 문의해주세요!
      br
      | We're looking for the first MS/PhD students and interns who are interested in our study!
      br
      | If you're interested in our study, please contact advisor through 'Contact' tab.

  v-row.mt-6
    .v-col-12.v-col-md-auto
      v-img(lazy-src='/img/noimg.svg', :src="imagePath", width="250px")
    .v-col-12.v-col-md-auto.margin-inside(v-html="lang === 'ko' ? biography.ko : biography.en")
    .v-col-12
      v-divider.my-5
      h3 {{lang === 'ko' ? "논문/특허 목록" : "Publications & Patents"}}
      v-list(density="compact")
        v-list-item.my-2(v-for="item in publications", @click="openLink(item)")
          span.mr-2(v-for="author in item.AUTHOR",
            :class="{'font-weight-bold text-grey-darken-2': author === person, 'text-grey': author !== person}") {{author}};
          span.text-grey ({{item.YEAR}})
          p.my-0.py-0.font-weight-black(:class="{'text-indigo': item.type !== 'misc'}")
            v-icon(size='small', color="indigo", v-if="item.type === 'inproceedings'") mdi-script-text
            v-icon(size='small', color="grey", v-else-if="item.type === 'misc'") mdi-seal-variant
            v-icon(size='small', color='indigo', v-else) mdi-book-open-page-variant
            span.mx-3 {{item.TITLE}}
          .mt-0.pt-0.text-grey.text-right
            .font-italic(v-if="item.type === 'inproceedings'") @ {{item.SERIES}} conference
            .font-italic(v-else-if="item.type === 'article'") {{item.JOURNAL}} {{item.VOLUME}}, No. {{item.NUMBER}}
          .mt-0.pt-0.text-right
            v-chip.float-left(size="small", v-for="tag in item.tags", :text="tag")
            v-spacer
            v-icon(size='small', color="success", v-if="item.DOI") mdi-link
            v-icon(size='small', color='grey', v-else) mdi-link-off

</template>

<script>
import {httpGet, monthParser, nameParser} from "@/util";
import _ from "lodash";
import BibtexParser from "bibtex-parse";


export default {
  name: "Person",
  props: ['lang', 'role', 'given', 'family'],
  data () {
    return {
      imagePath: '',
      person: '',
      biography: {},
      publications: []
    }
  },
  mounted() {
    this.imagePath = '/img/members/' + this.given.toLowerCase() + '-' + this.family.toLowerCase() + '.jpg'
    this.person = this.given + ' ' + this.family

    httpGet(['data', 'members', this.given.toLowerCase() + '-' + this.family.toLowerCase() + '.md'],
      (data) => {
        const [en, ko] = data.split('---')
        this.biography = {
          ko: window.marked.parse(ko),
          en: window.marked.parse(en)
        }
      }, (error) => {})

    httpGet(['data', 'publications.bib'], (data) => {
      this.publications = _.sortBy(BibtexParser.entries(data).map((item) => {
        item.tags = item.NOTE ? item.NOTE.split(' ') : []
        item.MONTH = monthParser(item.MONTH)
        item.AUTHOR = nameParser(item.AUTHOR)
        return item
      }), [(item) => -item.YEAR, (item) => -item.MONTH]).filter((p) => _.includes(p.AUTHOR, this.person))
    }, (error) => {})
  },
  methods: {
    openLink (item) {
      if (item.DOI) window.open('https://doi.org/' + item.DOI)
    }
  }
}
</script>

<style lang="stylus">
</style>
