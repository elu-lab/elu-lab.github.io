<template lang="pug">
div
  .d-flex.flex-column.fill-height.justify-center.align-center.py-10.px-5
    h1.font-weight-black.text-h3(v-if="lang === 'en'") Explainable Language Understanding (ELU) Lab
    h1.font-weight-black.text-h3(v-else) 설명가능한 언어이해 연구실 (ELU lab)
  v-container
    .mt-10(v-if="lang === 'en'")
      p.my-2
        b Explanable Language Understanding Lab
        span.font-weight-light (ELU lab, pronouncing as /i.lu.læb/) at Chung-Ang University aims to develop an AI agent that can interact with humans through languages.
        br
        span.font-weight-light Specifically, we focus on:
      ul.mx-5
        li.my-2
          b Inference
          span.font-weight-light : AI agents that can do logical or mathematical inference over given textual data.
          br
          span.font-italic.mx-5.font-weight-light E.g., Mathematical Question Answering, Textual Entailment, Natural language Inference, etc.
        li.my-2
          b Explainability
          span.font-weight-light : AI agents that can explain its inference steps interactively with human language.
          br
          span.font-italic.mx-5.font-weight-light E.g., Semantic Parsing, Explanation Generation, etc.
      p.my-2.font-weight-light And, our interest is not limited to these areas. You can study any problems that are related either natural language or explainability. By studying these problems, we believe that we can build such a useful AI agent for society someday.
    .mt-10(v-else)
      p.my-2
        span.font-weight-light 중앙대학교 &nbsp;
        b 설명가능한 언어이해 연구실
        span.font-weight-light (ELU lab, 이루랩)은 사람과 언어로서 의사소통이 가능한 인공지능 에이전트를 연구개발하는 연구실입니다.
        br
        span.font-weight-light 특히, 우리 연구실은 아래와 같은 주제에 관심을 두고 있습니다.
      ul.mx-5
        li.my-2
          b 추론능력
          span.font-weight-light : 주어진 텍스트 등의 데이터를 기반으로 논리적, 수학적 추론을 할 수 있는 인공지능 에이전트
          br
          span.font-italic.mx-5.font-weight-light 예) 수학적 질의응답(Mathematical Question Answering), 텍스트 연역 확인(Textual Entailment), 자연어 추론(Natural language inference) 등
        li.my-2
          b 설명능력
          span.font-weight-light : 자신의 추론 단계를 사람에게 글/말로써 설명하는 상호작용이 가능한 인공지능 에이전트
          br
          span.font-italic.mx-5.font-weight-light 예) 의미 분석(Semantic parsing), 설명 생성(Explanation generation) 등
      p.my-2.font-weight-light 주된 관심분야 외의 다른 분야에도 우리 연구실의 관심사는 열려있습니다. 학생여러분이 원한다면, 자연어 처리에 관련된 문제나, 설명능력에 관련한 어떤 연구라도 진행이 가능합니다. 그런 연구들이 쌓여서, 사회에 도움이 되는 기술들이 쌓이는 것이라고 우리는 믿습니다.

    v-divider.my-10
    h2 {{lang === 'ko' ? "최근 소식" : "Recent News"}}
    v-banner.my-1(v-for="item in recentNews")
      v-banner-text: p
        span.font-weight-black(:class="'text-' + item.color") {{item.date}}
        span.font-weight-light(v-html="item.content")
</template>

<script>
import {httpGet, monthParser} from "@/util";
import _ from "lodash";
import BibtexParser from "bibtex-parse";

export default {
  name: "About",
  props: ['lang'],
  data () {
    return {
      news: [],
      acceptance: [],
    }
  },
  mounted() {
    httpGet(['data', 'news.md'], (markdown) => {
      this.news = _.map(markdown.split('\n\n'), (news) => {
        const [date, lang, content] = news.split('|')
        return {
          date: date,
          lang: lang,
          icon: 'mdi-bullhorn',
          color: 'red-accent-2',
          content: window.marked.parse(content).replace(/<strong>/g, '<strong class="font-weight-bold">')
        }
      })
    }, () => {})
    httpGet(['data', 'publications.bib'], (data) => {
      this.acceptance = BibtexParser.entries(data).flatMap((item) => {
        const name = item.type === 'inproceedings' ? item.SERIES : (item.JOURNAL + ' ' + item.VOLUME + ', No.' + item.NUMBER)
        return [{
          date: item.YEAR + '/' + monthParser(item.MONTH),
          lang: 'ko',
          icon: 'mdi-book',
          color: 'indigo-lighten-2',
          content: window.marked.parse(`${name}에 우리 연구실의 논문 "${item.TITLE}"이 게재되었습니다. <span class="text-grey">` + item.NOTE + '</span>')
        }, {
          date: item.YEAR + '/' + monthParser(item.MONTH),
          lang: 'en',
          icon: 'mdi-book',
          color: 'indigo-lighten-2',
          content: window.marked.parse(`Our paper titled "${item.TITLE}" is accepted to ${name}. <span class="text-grey">` + item.NOTE + '</span>')
        }]
      })
    }, (error) => {
      console.log(error)
    })
  },
  computed: {
    langSafe () {
      return this.lang ? this.lang : 'ko'
    },
    recentNews () {
      return _.take(_.reverse(_.sortBy(_.filter(_.concat(this.news, this.acceptance),
        (item) => item.lang === this.langSafe),
        [(item) => item.date])), 20)
    }
  }
}
</script>

<style scoped lang="stylus">
</style>
