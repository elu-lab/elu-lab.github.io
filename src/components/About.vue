<template lang="pug">
div
  v-parallax(src="/img/parallex/intro.jpg", height="40vh", scale=".5")
    .d-flex.flex-column.fill-height.justify-center.align-center.text-white.text-shadow
      h1.font-weight-black.text-h3(v-if="lang === 'en'")
        span.d-inline-block.mx-1 Explainable
        span.d-inline-block.mx-1 Language
        span.d-inline-block.mx-1 Understanding
        span.d-inline-block.mx-1 (ELU) Lab
      h1.font-weight-black.text-h3(v-else)
        span.d-inline-block.mx-1 설명가능한
        span.d-inline-block.mx-1 언어이해
        span.d-inline-block.mx-1 연구실
        span.d-inline-block.mx-1 (ELU lab)
  v-container
    .mt-10.text-body-1.text-lg-h6(v-if="lang === 'en'")
      p.my-2
        b Explanable Language Understanding Lab
        span.font-weight-light
          | (ELU lab, pronouncing as /i.lu.læb/) at Chung-Ang University aims to develop an
        b.text-blue-accent-3.mx-1 Natural Language Processing (NLP)
        span.font-weight-light techniques that can interact with humans through languages.
        br
        span.font-weight-light Specifically, we focus on these areas:
      ul.mx-5
        li.my-2
          b.text-blue-accent-4 Inference
          span.font-weight-light : NLP technology that can do logical or mathematical inference over given textual data.
          br
          span.font-weight-light.text-caption.text-lg-body-1 E.g., Mathematical Question Answering, Textual Entailment, Natural language Inference, etc.
        li.my-2
          b.text-blue-accent-3 Explainability
          span.font-weight-light : NLP-based agents that can explain its inference steps interactively with human language.
          br
          span.font-weight-light.text-caption.text-lg-body-1 E.g., Semantic Parsing, Explanation Generation, etc.
        li.my-2
          b.text-blue-accent-2 Human-AI Interaction
          span.font-weight-light : Research about language-based interaction between a human and an AI agent.
          br
          span.font-weight-light.text-caption.text-lg-body-1 E.g., Interactions on Chatbots, etc.
      p.my-2.font-weight-light
        | As the world is changing rapidly, we also welcome other research topics which are not listed above.
        | If that's related to natural language processing, any research topic you want is fine.
        | And we believe that, by building up those studies, we can one day create technologies that are good for society.
    .mt-10.text-body-1.text-lg-h6(v-else)
      p.my-2
        span.font-weight-light 중앙대학교 &nbsp;
        b 설명가능한 언어이해 연구실
        span.font-weight-light (ELU lab, 이루랩)은 사람과 언어로 의사소통이 가능한
        b.text-blue-accent-3.mx-1 자연어처리
        span.font-weight-light 인공지능을 연구하는 연구실입니다.
        br
        span.font-weight-light 특히, 우리 연구실은 아래와 같은 주제에 관심을 두고 있습니다.
      ul.mx-5
        li.my-2
          b.text-blue-accent-4 추론능력
          span.font-weight-light : 텍스트 등 데이터를 기반으로 논리적/수학적인 추론을 할 수 있는 자연어처리 연구
          br
          span.font-weight-light.text-caption.text-lg-body-1 예) 수학적 질의응답(Mathematical Question Answering), 텍스트 연역 확인(Textual Entailment), 자연어 추론(Natural language inference) 등
        li.my-2
          b.text-blue-accent-3 설명능력
          span.font-weight-light : 추론 단계를 사람에게 글/말로 설명할 수 있는 자연어처리 인공지능 연구
          br
          span.font-weight-light.text-caption.text-lg-body-1 예) 의미 분석(Semantic parsing), 설명 생성(Explanation generation) 등
        li.my-2
          b.text-blue-accent-2 인간-인공지능 상호작용
          span.font-weight-light : 자연어처리 인공지능과 사람 사이의 상호작용에 관한 연구
          br
          span.font-weight-light.text-caption.text-lg-body-1 예) 챗봇(Chatbot) 상호작용 관련 연구 등
      p.my-2.font-weight-light
        | 세상이 빠르게 변하고 있기 때문에, 우리는 위에 적힌 세 분야 외의 다른 분야 연구주제도 환영합니다.
        | 자연어처리와 관련이 있다면 학생여러분이 원하는 어떤 연구라도 좋습니다.
        | 그러한 연구들이 쌓이다 보면, 언젠가 사회에 도움이 되는 기술들을 만들 수 있을테니까요.
    .mt-10
      p.text-h6.text-red-accent-3.text-center(v-if="lang === 'ko'")
        | 연구실의 첫 학부생 인턴, 석박사과정 학생을 모집하고 있습니다.
        br
        | 관심이 있다면&nbsp;
        a(href="https://forms.gle/u32h6cBpgZNPhLAq6") 설문
        |을 응답하거나,&nbsp;
        a(href="/#/ko/contact") [문의하기]
        |를 눌러 문의해주세요.
      p.text-h6.text-red-accent-3.text-center(v-else)
        | We're looking for the first MS/PhD students and interns who are interested in our study!
        br
        | If you're interested in our study, please fill&nbsp;
        a(href="https://forms.gle/u32h6cBpgZNPhLAq6") the application form&nbsp;
        | or contact advisor through&nbsp;
        a(href="/#/ko/contact") 'Contact'&nbsp;
        | tab.
    v-divider.my-10
    h2 {{lang === 'ko' ? "최근 소식" : "Recent News"}}
    v-banner.my-1(v-for="item in recentNews")
      v-banner-text: p
        v-icon.mr-2(size='tiny', :icon="item.icon")
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
      this.news = _.map(markdown.split('---'), (news) => {
        const [date, lang, content] = news.trim().split('|')
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
