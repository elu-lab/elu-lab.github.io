<template lang="pug">
v-container
  h1.text-center.mb-3.text-indigo-darken-4
    v-icon.ma-2(size='small') mdi-file-document-multiple
    span {{lang === 'ko'? "논문실적" : "Publications"}}

  v-form
    v-row
      v-col(cols=4)
        v-select(chips, multiple, placeholder="Tags", v-model="tagSelected", :items="allTags", @blur="search()")
      v-col(cols=8)
        v-text-field(label="Word to search", v-model="searchWord", @blur="search()", @keypress.space="search()", @keypress.enter="search()")

  v-row(v-for="group in yearCategorizedItems")
    .v-col-12
      h1.text-indigo-accent-2 {{group[0]}}
    div(:class="item.key === abstractOpen ? 'v-col-12 v-col-md-6' : 'v-col-6 v-col-md-3'", v-for="item in group[1]")
      v-card(:color="item.key === abstractOpen ? 'grey-lighten-3' : ''", elevation=3)
        v-img.align-end(v-if="item.key !== abstractOpen", lazy-src='/img/placeholder.png',
          :src="'/img/paper/' + item.key + '.png'", height='8em', cover)
        v-card-subtitle.mb-0.pb-0.mt-2
          span.mr-2(v-for="author in item.AUTHOR") {{author}};
        v-card-title.my-0.py-0 {{item.TITLE}}
        v-card-subtitle.mt-0.pt-0.font-italic.text-right(v-if="item.type === 'inproceedings'") @ {{item.SERIES}} conference
        v-card-subtitle.mt-0.pt-0.font-italic.text-right(v-else-if="item.type === 'article'") {{item.JOURNAL}} {{item.VOLUME}}, No. {{item.NUMBER}}
        v-card-text(v-if="item.key === abstractOpen")
          v-img(lazy-src='/img/placeholder.png', :src="'/img/paper/' + item.key + '.png'", aspect-ratio="1.66", cover)
          p {{item.ABSTRACT}}
        v-card-actions
          v-chip(size="small", :color="tagColor(tag)" v-for="tag in item.tags") {{tag}}
          v-spacer
          v-btn(size='small', icon="mdi-text", color="blue", @click="toggleAbstract(item)")
          v-btn(size='small', icon="mdi-link", color="green", v-if="item.DOI", @click="openLink(item)")
</template>

<script>
import {httpGet, monthParser, nameParser} from "@/util";
import BibtexParser from "bibtex-parse";
import _ from "lodash";


export default {
  name: "Pub",
  props: ["lang"],
  data () {
    return {
      items: [],
      allItems: [],
      abstractOpen: '',
      allTags: [],
      tagSelected: [],
      searchWord: ''
    }
  },
  mounted() {
    httpGet(['data', 'publications.bib'], (data) => {
      this.items = _.sortBy(BibtexParser.entries(data).map((item) => {
        item.forSearch = (item.NOTE + ' ' + item.AUTHOR + ' ' + item.TITLE + ' ' + item.ABSTRACT).toLowerCase()
        item.tags = item.NOTE ? item.NOTE.split(' ') : []
        item.MONTH = monthParser(item.MONTH)
        item.AUTHOR = nameParser(item.AUTHOR)
        return item
      }), [(item) => -item.YEAR, (item) => -item.MONTH])

      this.allTags = _.uniq(this.items.flatMap((item) => item.tags))
      this.allItems = this.items
      this.tagSelected = []
      this.searchWord = ''
    }, (error) => {})
  },
  methods: {
    openLink (item) {
      window.open('https://doi.org/' + item.DOI)
    },
    toggleAbstract (item) {
      if (this.abstractOpen === item.key) this.abstractOpen = ''
      else this.abstractOpen = item.key
    },
    tagColor (tag) {
      if (tag.startsWith("#BK") || tag.startsWith("#SCI")) return "red"
      if (tag.startsWith("#Domestic")) return "grey"
      if (tag.startsWith("#Application")) return "orange"
      else return "indigo"
    },
    search () {
      this.items = this.allItems.filter((item) => {
        if (this.tagSelected && _.some(this.tagSelected, (t) => !item.tags.includes(t))) return false
        if (this.searchWord) {
          const words = this.searchWord.split(' ')
          for (let word of words) {
            word = word.toLowerCase()
            if (!item.forSearch.includes(word)) return false
          }
        }
        return true
      })
    }
  },
  computed: {
    yearCategorizedItems () {
      return _.sortBy(Object.entries(_.groupBy(this.items, (item) => item.YEAR)), (p) => -p[0])
    }
  }
}
</script>

<style scoped lang="stylus">

</style>
