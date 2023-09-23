<template lang="pug">
div
  table(style="background:#cecece;height:20vh;width:100%"): tr
    td: img(src="/img/parallex/team.png", style="height:20vh")
    td: .text-white.text-shadow.text-h3.font-weight-black.text-center {{lang === 'ko'? "연구실 사람들" : "Our Team"}}
  v-container
    v-row.mt-6
      .v-col-12.v-col-sm-3.v-col-md-2
        v-img.rounded(lazy-src='/img/noimg.svg', :src="imagePath", cover,
          gradient="135deg, rgba(255,255,255,.1) 0%, rgba(255,255,255,.3) 15%, rgba(255,255,255,0) 50%, rgba(255,255,255,.3) 85%, rgba(100,100,100,.1) 100%")
      .v-col-12.v-col-sm-9.v-col-md-10.margin-inside(v-html="lang === 'ko' ? biography.ko : biography.en")
      .v-col-12(v-if="publications.length")
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
              span.ml-3 {{item.TITLE}}
            .mt-0.pt-0.text-grey.text-right
              .font-italic(v-if="item.type === 'inproceedings'") @ {{item.SERIES}} conference
              .font-italic(v-else-if="item.type === 'article'") {{item.JOURNAL}} {{item.VOLUME}}, No. {{item.NUMBER}}
            .mt-0.pt-0.text-right
              v-chip.float-left(size="small", v-for="tag in item.tags", :text="tag")
              v-spacer
              v-icon(size='small', color="success", v-if="item.DOI") mdi-link
              v-icon(size='small', color='grey', v-else) mdi-link-off
      .v-col-12(v-else)
        v-divider.my-5
        h3.text-grey {{lang === 'ko' ? "아직 출판된 논문 없음" : "No publications yet"}}
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
    this.imagePath = '/img/members/' + this.given.toLowerCase().replace(' ', '-') + '-' + this.family.toLowerCase().replace(' ', '-') + '.jpg'
    this.person = this.given + ' ' + this.family

    httpGet(['data', 'members', this.given.toLowerCase().replace(' ', '-') + '-' + this.family.toLowerCase().replace(' ', '-') + '.md'],
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
