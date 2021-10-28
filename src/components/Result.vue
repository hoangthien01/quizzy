<template>
   <div class="content" >
      <h1 class="title">Result</h1>
      <div class="result">
          <div class="result-item">
              <span style="margin-right:10px">Correct Answer:</span>
              <span style="color: rgb(84, 230, 84);">{{this.$store.state.correctAnswer}} </span>
          </div>
          <div class="result-item">
              <span style="margin-right:10px">Wrong Answer:</span>
              <span style="color:rgb(236, 73, 73)">{{this.$store.state.wrongAnswer}} </span>
          </div>
      </div>
      <div class="time">
          <span style="margin-right:10px">Thời gian hoàn thành:</span>
          <span>{{new Date(this.$store.state.completionTime * 1000).toISOString().substr(11, 8)}}s</span>
      </div>
      <p class="message">{{this.$store.state.resultMessage}}</p>
      <button class="btn-reset" @click="reset">Try again</button>
  </div>
</template>

<script>
export default {
  name: 'Result',
  methods : {
    reset() {
      return this.$store.commit('reset')
    }
  }
}
</script>

<style scoped>
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

.result {
  margin: 15px 0 0;
  display: flex;
  flex-wrap: wrap;
}

.result-item,.time,.message {
  margin:12px 40px 0 0;
  font-size: 20px;
}
.time,.message {
  margin-top: 12px;
  text-align: left;
}

.btn-reset {
  border: none;
  padding: 8px 16px;
  background-color: #273B62;
  color: #fff;
  font-size: 18px;
  border-radius: 5px;
  margin-top: 25px;
  cursor: pointer;
  position: relative;
}

.btn-reset::before,
.btn-reset::after {
  position: absolute;
  content: "";
  width: 0%; height: 0%;
  opacity: 0;
  transition: width 0.1s linear, height 0.05s 0.1s ease-out, opacity 0s 0.2s;
}
.btn-reset::before {
  bottom: -3px; left: -3px;
  border-top-left-radius: 5px;
  border-top: 2px solid #273B62;
  border-left: 2px solid #273B62;
}
.btn-reset::after {
  top: -3px; right: -3px;
  border-bottom-right-radius: 5px;
  border-bottom: 2px solid #273B62;
  border-right: 2px solid #273B62;
}
.btn-reset:hover::before,
.btn-reset:hover::after {
  width: calc(100% ); height:calc(100% + 5px);
  opacity: 1;
  transition: width 0.1s 0.1s ease-out, height 0.15s ease-in, opacity 0s;   
}

@media screen and (max-width: 480px){
   .time>span:nth-child(2) {
     display: block;
   }
}
</style>