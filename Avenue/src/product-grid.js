
export async function initproductGrit(){
    const productsContainer = document.getElementById("products");
    const filtersContainer = document.getElementsByClassName("filter-box")[0];
    const products = await getFromBackEnd("https://my-json-server.typicode.com/Kolland/fe-basics-resources/products")
    const categories = await getFromBackEnd("https://my-json-server.typicode.com/Kolland/fe-basics-resources/categories")

    products.forEach((product) => {
        const additionalClasses = product.categories;
        const productHtml = buildProductHtml(product, additionalClasses);
        jQuery(productsContainer).append(productHtml);
      });
    
    categories.forEach((filter) => {
        const filterHtml = buildFilterHtml(filter);
        jQuery(filtersContainer).append(filterHtml);
      });

    function getFromBackEnd(url){
       return fetch(url)
            .then(responce =>{ 
                return responce.json()
            })
    }

    const iso = new Isotope(productsContainer);

    initFilters(iso, (filter) => {
        localStorage.setItem("filter", filter);
    });

    

      
}
function buildProductHtml (product, additionalClasses){
    const productTemplate = document.getElementById("product-template").innerHTML;
    
    const compiled = _.template(productTemplate);
    return compiled({
        img: product.frontPic,
        price :product.price,
        priceDisc: product.discount,
        className: additionalClasses.join(" ")
    });
}

function buildFilterHtml(filter) {
    const filterTemplate = document.getElementById("filter-template").innerHTML;
    const compiled = _.template(filterTemplate);
    return compiled({
      filter
    });
  }

function initFilters(isotopeInstance, callback) {
    document.querySelectorAll(".filter-item").forEach((element) => {
      element.addEventListener("click", function () {
        callback?.(this.dataset.filter);
        isotopeInstance.arrange({
          filter: this.dataset.filter
        });
      });
    });
  }