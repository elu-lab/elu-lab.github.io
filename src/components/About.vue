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
          b.text-blue-accent-4 AI for Science
          span.font-weight-light : Applying AI methodologies to accelerate scientific discovery and problem-solving across domains.
          br
          span.font-weight-light.text-caption.text-lg-body-1 E.g., Agentic AI systems, retrieval-augmented generation (RAG) for scientific knowledge, automated hypothesis generation, etc.
        li.my-2
          b.text-blue-accent-3 AI-generated Content Detection
          span.font-weight-light : Developing methods to detect and analyze machine-generated texts, ensuring reliability and authenticity.
          br
          span.font-weight-light.text-caption.text-lg-body-1 E.g., LLM-generated text detection, etc.
        li.my-2
          b.text-blue-accent-2 Spoken Language Models & Text-to-Speech (TTS)
          span.font-weight-light : Building models that understand and generate spoken language for natural communication.
          br
          span.font-weight-light.text-caption.text-lg-body-1 E.g., speech synthesis, expressive TTS, spoken dialogue systems, etc.
          li.my-2
          b.text-blue-accent-2 Agent Systems & Multi-Agent Collaboration
          span.font-weight-light : Designing intelligent agents that collaborate, communicate, and exhibit human-like behaviors.
          br
          span.font-weight-light.text-caption.text-lg-body-1 E.g., multi-agent story generation, collaborative problem solving, socially-aware agents based on psychological and sociological theories, etc.
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
          b.text-blue-accent-4 AI for Science
          span.font-weight-light : 다양한 과학 분야에서 AI를 활용하여 과학적 발견과 문제 해결을 가속화하는 연구
          br
          span.font-weight-light.text-caption.text-lg-body-1 예) Agentic AI systems, retrieval-augmented generation (RAG) for scientific knowledge, automated hypothesis generation, etc.
        li.my-2
          b.text-blue-accent-3 AI 생성 콘텐츠 탐지
          span.font-weight-light : AI가 생성한 텍스트를 탐지하고 분석하여 정보의 신뢰성과 진위성을 확보하는 기술 연구
          br
          span.font-weight-light.text-caption.text-lg-body-1 예) LLM-generated text detection, etc.
        li.my-2
          b.text-blue-accent-2 	Human-Computer Interaction (HCI)
          span.font-weight-light : 인간과 AI 시스템 간의 상호작용 품질을 향상시키기 위한 사용자 중심 연구
          br
          span.font-weight-light.text-caption.text-lg-body-1 예) 인터랙티브 AI 시스템, 설명 가능한 인터페이스, 사용자 적응형 대화 시스템 등
          li.my-2
          b.text-blue-accent-2 음성 언어 모델 및 Text-to-Speech (TTS)
          span.font-weight-light : 자연스러운 인간-AI 커뮤니케이션을 위한 음성 기반 언어 이해 및 생성 모델 연구
          br
          span.font-weight-light.text-caption.text-lg-body-1 예) 음성 합성, 감정 표현 TTS, 음성 대화 시스템 등
          li.my-2
          b.text-blue-accent-2 	에이전트 시스템 및 멀티 에이전트 협업
          span.font-weight-light : 협력과 소통이 가능한 지능형 에이전트를 설계하고, 인간과 유사한 행동을 구현하는 연구
          br
          span.font-weight-light.text-caption.text-lg-body-1 예)  스토리 생성, 협업적 문제 해결, 심리학·사회학 이론을 반영한 사회적 에이전트 등
      p.my-2.font-weight-light
        | 세상이 빠르게 변화하고 있어, 위의 연구 주제는 언제든지 변화할 수 있습니다.
        | 때문에, 우리는 위에 적힌 세 분야 외의 다른 분야 연구주제도 환영합니다.
        br
        | 자연어처리나 음성합성과 관련이 있다면 학생여러분이 원하는 어떤 연구라도 좋습니다.
        | 그러한 연구들이 쌓이다 보면, 언젠가 사회에 도움이 되는 기술들을 만들 수 있을테니까요.
    .mt-10
      p.text-h6.text-red-accent-3.text-center(v-if="lang === 'ko'")
        | 연구실의 학부생 인턴(스터디 포함)을 모집하고 있습니다.
        br
        | 관심이 있다면&nbsp;
        a(href="https://forms.gle/u32h6cBpgZNPhLAq6") 설문
        |을 응답해주세요.
      p.text-h6.text-red-accent-3.text-center(v-else)
        | We're looking for undergraduate interns (or students) who are interested in our study!
        br
        | If you're interested in our study, please fill&nbsp;
        a(href="https://forms.gle/u32h6cBpgZNPhLAq6") the application form.
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
      this.acceptance = BibtexParser.entries(data).filter((item) => {
        return item.type != "misc"
      }).flatMap((item) => {
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
