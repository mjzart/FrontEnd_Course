const slide1 = document.getElementsByClassName('slide1')[0];
const slider = document.getElementsByClassName('slider')[0];
const timeout = slider.dataset.timeout;
const type = slider.dataset.type;
const arrowLeft = document.getElementsByClassName("Arrow-L")[0];
const arrowRight = document.getElementsByClassName("Arrow-R")[0];


let index = 1
slide1.style.marginLeft = `0px`;
slider.style.width = `${slide1.offsetWidth}px`;

function sliding() {
  slide1.style.marginLeft = `-${slide1.offsetWidth * index}px`
  index++
}

if (type === 'loop'){
    const id =  setInterval(() => {
      sliding()
      
      
      if (index >3){
        slide1.style.marginLeft = '0px'
        index = 1
      }
    }, timeout)
} else{
    const id =  setInterval(() => {
      sliding();
      if (index >3){
        clearInterval(id)
      }
    }, timeout)
}



