const slide1 = document.getElementsByClassName('slide1')[0];
const slider = document.getElementsByClassName('slider')[0];
let timeout = slider.dataset.timeout;
const type = slider.dataset.type;
let pause = slider.dataset.pauseOnHover;
const arrowLeft = document.getElementsByClassName("Arrow-L")[0];
const arrowRight = document.getElementsByClassName("Arrow-R")[0];


let index = 0;
slide1.style.marginLeft = `0px`;
let sliderWidth = slide1.offsetWidth
window.addEventListener('resize', ()=>{
  slider.style.width = `${slide1.offsetWidth}px`;
  sliderWidth = slide1.offsetWidth
  console.log(sliderWidth);
})

function slidingRight() {
  index++
  slide1.style.marginLeft = `-${sliderWidth * index}px`

  if (index >2){
    slide1.style.marginLeft = '0px'
    index = 0
  }
}

function slidingLeft() {
  index--

  slide1.style.marginLeft = `-${sliderWidth * index}px`
  
  if (index <0){
    index = 2
    slide1.style.marginLeft = `-${sliderWidth * index}px`
    
    
    
  }
}

function sliderPause(){
  pause = true;
  console.log(pause);
}



    if (type === 'loop'){
        const id =  setInterval(() => {
          if (pause){
            return;
          } else {
            slidingRight()
          }
        }, timeout)
    } else{
        const id =  setInterval(() => {
          if (pause){
            return
          } else {
          slide1.style.marginLeft = `-${sliderWidth * index}px`
          index++
          if (index >2){
            clearInterval(id)
          } 
        }
        }, timeout)
    }
  
 

arrowRight.addEventListener('click', slidingRight);
arrowLeft.addEventListener('click', slidingLeft);
slider.addEventListener('mouseover', sliderPause);
slider.addEventListener('mouseout', ()=>{
  pause = false;
});






