<template>
  <div class="quiz-wraper">
    <el-row type="flex" justify="center" style="width: 100%;">
      <el-col class="content" v-if="index < questions.length" :xs="20" :sm="16" :md="16" :lg="16" :xl="8">
          <h1 class="title">QUIZ</h1>
          <div class="process-bar ">
              <span id="process"></span>
          </div>
          <div class="content-question">
              <p>{{htmlDecode(questions[index].question)}}</p>
          </div>
          <div class="content-answers">
              <div class="content-answer" v-for="answer,index in questions[index].answers" :key="index"
                  @click="answered(answer)">
                  {{htmlDecode(answer)}}
              </div>
          </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name : 'Quiz',
  data() {
    return {
    }
  },
  computed: {
    questions() {
      return this.$store.state.questions;
    },
    index() {
      return this.$store.state.index;
    }
  },
  methods : {
    answered(payload) {
      this.$store.commit('answered',payload)
    },
    htmlDecode(input) {
      var doc = new DOMParser().parseFromString(input, "text/html");
      return doc.documentElement.textContent;
    }
  }
}
</script>

<style scoped>
.quiz-wraper {
  position: relative;  
  width: 100vw;
  height: 100vh;
  background-color: #FBD663;
  display: flex;
  justify-content: center;
  align-items: center;
}

.content {
  margin: 0 20px;
  padding: 20px 40px;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  border-radius: 10px;
  background-color: #fff;
  text-align: left;
}

.title {
  font-size: 30px;
  color: #273B62;
}

.process-bar {
  margin: 20px 0;
  height: 7px;
  width: 100%;
  background-color: #F4F5F7;
  position: relative;
}

#process {
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgb(235, 94, 94);
  width: 0;
  height:7px;
  transition-duration: 1s;
}

.content-question {
  font-size: 25px;
  font-weight: bold;
  color: #273B62;
}

.content-answer {
  font-size: 20px;
  display: block;
  padding: 8px;
  border: 1px solid #ccc;
  margin-top: 20px;
  border-radius: 5px;
  cursor: pointer;
  color: #273B62;
  font-weight: 600;
}

.content-answer:hover {
  background-color: #F4F5F7;
}

@media screen and (max-width: 480px){
    .content-question {
      font-size: 20px;
    }
    .content-answer {
      font-size: 16px;
    }
}
</style>