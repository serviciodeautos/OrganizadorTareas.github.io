console.log('profe si revisa esto y al eliminar un producto con la "x" no agarra, presione varias veces, pero si funciona :"( ')


const btnCart = document.querySelector('.container-cart-icon') //a la hora de seleccionar 
const containerCartProducts = document.querySelector('.container-cart-products')
console.log(btnCart)

console.log('selecciona el div donde esta el carrito')

btnCart.addEventListener('click', () => { //declara que ocurre cierto evento
    containerCartProducts.classList.toggle('hidden-cart')
    console.log('solo se abre o cierra al presionar el carrito');
})//es como un swith quitan y anaden

//declaracion de variables

const cartInfo=document.querySelector('.cart-product')
console.log(cartInfo)
const rowProduct=document.querySelector('.row-product'); 
console.log(rowProduct);
console.log('el rowproducts es el que dice, no hay productos')

//lista de todos los contenedores existentes
const productsList=document.querySelector('.container-items')
console.log(productsList)
console.log('aqui este indica que tiene los contenedores de los productos')
//variables de arreglos de productos
let allProducts=[]
console.log('allproducts abajo')
console.log(allProducts);

const valorTotal=document.querySelector('.total-pagar')
console.log(valorTotal)

const countProducts=document.querySelector('#contador-productos') //con el # se representa el ID






productsList.addEventListener('click', e=>{ //.target sirve para la consola sepa que tipo de elemento hemos seleccionado 
        //El método addEventListener() nos sirve para registra un evento a un objeto en específico

    if(e.target.classList.contains('btn-add-cart')){ //da un true o false, significa si tocaste o no un boton
         const product= e.target.parentElement
            console.log('define basicamente que, seleccionamos un div, y con ello su informacion')
            console.log(product)

         const infoProduct={
            quantity: 1,
            title: product.querySelector('h2').textContent,
            price: product.querySelector('p').textContent,
         }
         console.log(infoProduct)




         const existe= allProducts.some(product=>product.title===infoProduct.title)
         //console.log('.some returna un boleano, busca en entre todos los objetos.')

          if(existe){
                const products=allProducts.map(product=>{
                    if(product.title===infoProduct.title){
                        product.quantity++
                        return product
                    }else{
                        return product
                    }
                })
                allProducts=[...products]
//El método map() crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.

          }else{

            allProducts=[...allProducts,infoProduct];
          }






        showHTML();
    }
    
});



rowProduct.addEventListener('click', e=>{
    if(e.target.classList.contains('icon-close')){
        const product=e.target.parentElement
        const title=product.querySelector('p').textContent

        allProducts=allProducts.filter(product=>product.title !==title )
        console.log(allProducts)
        showHTML()
    }
})



//funcion para mostrar en HTML

const showHTML=() =>{


  


    //limpia el HTML
    rowProduct.innerHTML='';

    let total=0;
    let totalAcumulado=0;




    
    allProducts.forEach(product=>{
        const containerProduct=document.createElement('div')
        containerProduct.classList.add('cart-product')

        containerProduct.innerHTML=
        `<div class="info-cart-product">
        <span class="cantidad-producto-carrito">${product.quantity}</span>
        <p class="titulo-producto-carrito">${product.title}</p>
            <span class="precio-producto-carrito">${product.price}</span>
        </div>
        <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="icon-close"
    >
        <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18L18 6M6 6l12 12"
        />
    </svg>`


    rowProduct.append(containerProduct);

    total=total+parseInt(product.quantity);
    totalAcumulado=totalAcumulado+product.quantity;
    })



    valorTotal.innerText=`${total}`;
    countProducts.innerText=totalAcumulado;
}