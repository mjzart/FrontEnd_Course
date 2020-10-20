const slide1 = document.getElementsByClassName('slide1')[0];
const slider = document.getElementsByClassName('slider')[0];
const timeout = slider.dataset.timeout;
const type = slider.dataset.type;

let index = 1
slide1.style.marginLeft = '200%';

if (type === 'loop'){
    const id =  setInterval(() => {
      slide1.style.marginLeft = `${200 - (200 * index)}%`
      
      index++
      if (index >3){
        slide1.style.marginLeft = '200%'
        index = 1
      }
    }, timeout)
} else{
    const id =  setInterval(() => {
      slide1.style.marginLeft = `${200 - (200 * index)}%`
      
      index++
      if (index >2){
        clearInterval(id)
      }
    }, timeout)
}

