<template>
  <div id="app">
    <welcome v-if="!this.$store.state.started" class="animate__animated animate__fadeIn"></welcome>
    <div v-else>
      <quiz v-show="this.$store.state.resultMessage == ''" class="animate__animated animate__fadeIn"></quiz>
      <result v-show="this.$store.state.resultMessage != ''" class="animate__animated animate__flipInX"></result>
    </div>
  </div>
</template>

<script>
import Welcome from "./components/Welcome.vue"
import Quiz from "./components/Quiz.vue"
import Result from "./components/Result.vue"
export default {
  name: 'App',
  components: {
    Welcome,Quiz,Result
  },
  data() {
    return {
    }
  }
}
</script>

<style>
#app {
  font-family: 'Zen Old Mincho', serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  position: relative;  
  width: 100vw;
  height: 100vh;
  display: flex;
  background-color: #fbd663;
  justify-content: center;
  align-items: center;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

</style>
