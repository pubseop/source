<template>
  <div id="app">
      <div class="game-screen">
        <router-view/>
      </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted: function(){
      this.preventBack();
  },
  methods: {
      preventBack: function() {
          window.onpopstate = function () {
              history.go(1);
          };
      },
  }
}
</script>

<style>
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var, b,
 u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video, button {
	margin: 0;
	padding: 0;
	border: 0;
	/*font-size: 100%;*/
	font: inherit;
	vertical-align: baseline;
    /*add Property*/
    box-sizing: border-box;
    direction: ltr;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul, menu {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
a{
    color: inherit;
    text-decoration: none;
}
img{
    border: 0;
    outline: 0;
}
hr{
	margin: 0;
	border: 0;
	height: 1px;
	background-color: #ccc;
}
*:focus{
    outline: 0;
}
input, button, textarea, select, option{
	box-sizing: border-box;
}
body{
  margin: 0;
  
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #7da6a7;
  height: 100vh;
}
.game-screen{
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  max-width: 600px;
  width: 90%;
  height: 90%;
}
h3 {
  font-family: sans-serif;
  font-size: 26px;
}
button {
  width: 100%;
  height: 100%;
  border: 0;
  font-size: 20px;
  line-height: 44px;
  background-color: transparent;
  cursor: pointer;
  transition: all 0.5s;
}
button:hover {
  background-color: rgba(0, 0, 0, 0.2);
}
</style>
