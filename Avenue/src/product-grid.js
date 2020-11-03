export async function initproductGrit(){
    const product = await getProduct("https://my-json-server.typicode.com/Kolland/fe-basics-resources/products")

    async function getProduct(url){
       return fetch(url)
            .then(responce =>{ 
                return responce.json()
            })
    }
    function bildProductHTML ()
}