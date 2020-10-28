const imgItem = document.querySelectorAll('.img-item')
const item = document.querySelectorAll('.item')
const imgItemFront = document.querySelectorAll('.mini-img-front')
const imgItemBack = document.querySelectorAll('.mini-img-back')
const price= document.querySelectorAll('.price-num')
const description= document.querySelectorAll('.description')
const priceDisc= document.querySelectorAll('.price-disc')

fetch('https://my-json-server.typicode.com/Kolland/fe-basics-resources/categories',{
    method:'GET'
})
    .then(response =>response.json())
    .then(data => {
        const filtersLielement = data.map(category => {
            return `<li class="filter-item" data-filter=".${category}">${category}</li>`
        })
        $('.filter-box').append(filtersLielement.join(''))
    })




fetch('https://my-json-server.typicode.com/Kolland/fe-basics-resources/products',{
    method: 'GET'
})
    .then(response => response.json())
    .then(data =>{
        imgItem.forEach((el, index) =>{
            el.src = data[index]["frontPic"]
        })
        imgItemFront.forEach((el, index) =>{
            el.src = data[index]["frontPic"]
        })
        imgItemBack.forEach((el, index) =>{
            el.src = data[index]["backPic"]
        })
        price.forEach((el, index) =>{
            if(data[index]["discount"]){
                el.innerHTML = data[index]["price"];
                el.style.textDecoration = "line-through";  
                priceDisc[index].innerHTML = ` £${data[index]["discount"]}`;
            } else{
                el.innerHTML = data[index]["price"]
            }
    
            
        })
        description.forEach((el, index) =>{
            el.innerHTML = data[index]["description"]
        })
        item.forEach((el, index)=>{
            data[index]["categories"].forEach(category=>{
                el.classList.add(category)
            })
        })

        const $isotope = $('.item').isotope();
        $('.filter-item').on('click', function() {
        console.log(this.dataset.filter);
        $isotope.isotope({ filter: this.dataset.filter });
    })
    })

    