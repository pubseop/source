<template>
  <div>
    <div class="header">
        <ul v-if="step !== 0" @click="step = 0" class="header-button-left">
          <li>Cancel</li>
        </ul>
        <ul v-if="step !== 0" @click="publish" class="header-button-right">
          <li>Next</li>
        </ul>
        <img src="./assets/logo.png" class="logo" />
      </div>
      <Container @write="작성한글 = $event" :인스타데이터="인스타데이터" :step="step" :src="src" />
      <div class="footer">
        <ul class="footer-button-plus" v-if="step == 0">
          <input @change="upload" type="file" id="file" class="inputfile" />
          <label for="file" class="input-plus">+</label>
        </ul>
    </div>
  </div>
</template>

<script>

import Container from './components/ContainerVue.vue'
import data from './assets/data.js'
import axios from 'axios'

export default {
  name: 'App',
  data() {
    return {
      step: 0,
      인스타데이터: data,
      src: '',
      작성한글: '',
      filter: ''
    }
  },
  mounted() {
    this.emitter.on('filter', (a)=>{
      this.filter = a
    })
  },
  methods: {
    more(){
      axios.get('https://codingapple1.github.io/vue/more0.json').then((결과)=>{
        this.인스타데이터.push(결과.data)
      })
    },
    upload(e){
      this.src = URL.createObjectURL(e.target.files[0])
      this.step = 1;
    },
    publish(){
      if(this.step == 2){
        if(confirm('정말 게시글을 올리시겠습니까?')){
          this.인스타데이터.unshift({
            name: "Sim Won",
            userImage: "https://placeimg.com/100/100/arch",
            postImage: this.src,
            likes: 36,
            date: "May 15",
            liked: false,
            content: this.작성한글,
            filter: this.filter
          });
          this.step = 0;
        }
      } else{
        this.step++
      }
    },
  },
  components: {
    Container
  }
}
</script>

<style>
body {
  margin: 0;
}
ul {
  padding: 5px;
  list-style-type: none;
}
.logo {
  width: 22px;
  margin: auto;
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 13px;
}
.header {
  width: 100%;
  height: 40px;
  background-color: white;
  padding-bottom: 8px;
  position: sticky;
  top: 0;
}
.header-button-left {
  color: skyblue;
  float: left;
  width: 50px;
  padding-left: 20px;
  cursor: pointer;
  margin-top: 10px;
}
.header-button-right {
  color: skyblue;
  float: right;
  width: 50px;
  cursor: pointer;
  margin-top: 10px;
}
.footer {
  width: 100%;
  position: sticky;
  bottom: 0;
  padding-bottom: 10px;
  background-color: white;
}
.footer-button-plus {
  width: 80px;
  margin: auto;
  text-align: center;
  cursor: pointer;
  font-size: 24px;
  padding-top: 12px;
}
.sample-box {
  width: 100%;
  height: 600px;
  background-color: bisque;
}
.inputfile {
  display: none;
}
.input-plus {
  cursor: pointer;
}
#app {
  box-sizing: border-box;
  font-family: "consolas";
  margin-top: 60px;
  width: 100%;
  max-width: 460px;
  margin: auto;
  position: relative;
  border-right: 1px solid #eee;
  border-left: 1px solid #eee;
}
</style>
