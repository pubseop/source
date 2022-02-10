// GNB 메뉴

const dropDown = document.querySelectorAll('.lnb-item');

for (let i = 0; i < dropDown.length; i++) {
   dropDown[i].addEventListener('mouseover', function () {
      showMenu = this.querySelector('.snb-wrap');
      showMenu.classList.add('active');
   });
   dropDown[i].addEventListener('mouseout', function () {
      hideMenu = this.querySelector('.snb-wrap');
      hideMenu.classList.remove('active');
   });
}

// 모바일 햄버거버튼

const mToggleBtn = document.querySelectorAll('.m-toggle');
const mWrap = document.querySelector('.mnb-wrap');
const mSlide = document.querySelector('.mnb');

for(let i = 0; i < mToggleBtn.length; i++) {
   mToggleBtn[i].addEventListener('click', function(){
      mWrap.classList.toggle('m-active');
      document.body.classList.toggle('scroll-lock');
   });
}

// 토글 버튼

function toggleBtn(target){
   document.querySelector(target).classList.toggle('active');
}

// 모바일 아코디언 

var mBtn = document.querySelectorAll('.drop');
var mDropDown = document.querySelectorAll('.mnb-item');

for (var i = 0; i < mBtn.length; i++) {
   mBtn[i].addEventListener('click', function () {
      for (var x = 0; x < mDropDown.length; x++) {
         var targetItem = this.querySelector('.mnb-item');
         if(getComputedStyle(targetItem).height === '0px'){
            mDropDown[x].style.height = null;
            targetItem.style.height = targetItem.scrollHeight + "px";
            targetItem.parentNode.classList.add('active');           
         } else{
            targetItem.style.height = null;   
            targetItem.parentNode.classList.remove('active');   
         }
      }
   });
}