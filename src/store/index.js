import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    started: false,
    completionTime: 0,
    url:'https://opentdb.com/api.php?amount=10&type=multiple',
    index: 0,
    selectedAnswer: '',
    wrongAnswer: 0,
    correctAnswer: 0,
    questions: [],
    resultMessage: '',
    process : 0,
    isLoading : false
  },
  mutations: {
    updateURL (state,payload) {
      state.url = 'https://opentdb.com/api.php?amount=10'
      state.url +=  "&category=" + payload + "&difficulty=easy&type=multiple"
    },
    answered(state,payload) {
      state.selectedAnswer = payload
      if (payload == state.questions[state.index].correct_answer)
          state.correctAnswer++
      else {
          state.wrongAnswer++
      }
      state.index++
      state.selectedAnswer = ''
      state.process += 100 / state.questions.length
      document.getElementById('process').style.width = state.process + '%'
      if (state.index >= state.questions.length && state.correctAnswer >= state.wrongAnswer) {
          state.resultMessage = "Congratulations! You passed the exam."
      } 
      if (state.index >= state.questions.length && state.correctAnswer < state.wrongAnswer) {
          state.resultMessage = "Don't worry! You can try it again."
      }
    },
    reset(state) {
      state.started = false
      state.selectedAnswer = ''
      state.index = 0
      state.completionTime = 0
      state.correctAnswer = 0
      state.wrongAnswer = 0
      state.process =0
      state.resultMessage= ''
    }
  }, 
  actions: {
    async fetchQuestions({state}) {
      state.isLoading = true;
      let response = await Vue.axios.get(
        state.url
      );
      let data = response.data.results.map((question) => {
        question.answers = [
          question.correct_answer,
          ...question.incorrect_answers,
        ];
        for (let i = question.answers.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [question.answers[i], question.answers[j]] = [
            question.answers[j],
            question.answers[i],
          ];
        }
        return question;
      });
      
      state.questions = data;
      state.isLoading = false;
    },
    async start({ dispatch, state }) {
      await dispatch("fetchQuestions");
      state.started = true
      var myTime = setInterval(() => {
          if (state.index < state.questions.length) {
              state.completionTime++
          } else {
              clearInterval(myTime)
          }
      }, 1000)
    },
  }
})