<template lang="pug">
div
  table(style="background:#f9e7e7;height:20vh;width:100%"): tr
    td: .text-black.text-shadow-white.text-h3.font-weight-black.text-center {{lang === 'ko'? "강의" : "Courses"}}
    td.text-right: img(src="/img/parallex/course.png", style="height:20vh")
  v-container
    v-data-table(:headers="headers", :items="courses", item-value="idx", items-per-page="10")
</template>

<script>
import {httpGet} from "@/util";

export default {
  name: "Course",
  props: ['lang'],
  data () {
    return {
      courses: []
    }
  },
  mounted() {
    httpGet(['data', 'courses.md'], (data) => {
      this.courses = data.split('\n').map((line, idx) => {
        const [year, semester, grade, nameKo, nameEn] = line.split(',')
        return {
          idx: idx,
          year: year,
          semester: semester,
          gradeKo: (grade === '대학원'? grade : grade + '학년'),
          gradeEn: (grade === '대학원'? 'Graduate' : 'Grade '+ grade),
          nameKo: nameKo,
          nameEn: nameEn
        }
      })
    }, () => {})
  },
  computed: {
    headers () {
      if (this.lang === 'ko') {
        return [
          { title: '연도', key: 'year' },
          { title: '학기', key: 'semester' },
          { title: '대상학년', key: 'gradeKo' },
          { title: '과목명', key: 'nameKo' },
        ]
      } else {
        return [
          { title: 'Year', key: 'year' },
          { title: 'Semester', key: 'semester' },
          { title: 'Grade', key: 'gradeEn' },
          { title: 'Course Title', key: 'nameEn' },
        ]
      }
    }
  }
}
</script>

<style scoped lang="stylus">

</style>
