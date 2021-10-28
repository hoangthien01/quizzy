<template>
  <div class="wrapper">
    <div class="welcome">
      <p class="title">Quizzy!</p>
      <el-row type="flex" align="middle" justify="center" style="flex-wrap:wrap">
        <el-select v-model="value" placeholder="Any Category" class="selectbox" border-color="#000">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <el-button  :loading="this.$store.state.isLoading" class="btn-start" @click="start"
          :disabled = "this.$store.state.isLoading"
        >
          <span v-show="!this.$store.state.isLoading">
            Play <i class="fas fa-arrow-right play-icon"></i>
          </span> 
        </el-button>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "Welcome",
  data(){
    return{
       options: [{
          value: '21',
          label: 'Sports'
        }, {
          value: '25',
          label: 'Art'
        }, {
          value: '23',
          label: 'History'
        }, {
          value: '27',
          label: 'Animals'
        }, {
          value: '26',
          label: 'Celebrities'
        }],
        value: ''
    }
  },
  watch:{
    value() {
      this.$store.commit('updateURL',this.value)
    }
  },
  methods: {
    start() {
      this.$store.dispatch("start");
    },
  },
};
</script>

<style scoped>
.wrapper {
  width: 100vw;
  height: 100vh;
  background-color: #fbd663;
  position: relative;
}

.welcome {
  position: absolute;
  transform: translate(-50%, -50%);
  top: 40%;
  left: 50%;
  text-align: center;
}

.title {
  font-size: 170px;
  font-family: "Modak", cursive;
  animation-name: wave;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  -webkit-text-stroke-width: 3px;
  -webkit-text-stroke-color: black;
}

.title{
  animation-duration: 2s;
  animation-delay: 0.8s;
}

@keyframes wave {
  40%,
  50% {
    transform: scale(1.05);
  }

  0%,
  90%,
  100% {
    transform: scale(0.95);
  }
}

.el-select {
  margin:  20px ;
}


.btn-start {
  cursor: pointer;
  border:none;
  border-radius: 7px;
  font-size: 20px;
  font-weight: 600;
  height: 40px;
  color: #fff;
  display: flex;
  align-items: center;
  background-color: #2c3e50;
}

.play-icon{
  transition-duration: 0.5s;
  margin-left: 10px;
}

.btn-start:hover .play-icon{
  transform: translateX(15px);
  transition-duration: 0.8s;
}

.el-loading-mask {
  background-color: #2c3e50 !important;
}
.el-loading-spinner .circular  {
  width: 30px !important;
  height: 30px !important;
  color: red;
  background-color: red !important;
}

@media screen and (max-width: 768px){
    .title {
      font-size: 130px;
    }
}

@media screen and (max-width: 480px){
    .title {
      font-size: 80px;
    }
}
</style>