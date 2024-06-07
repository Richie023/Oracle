import { servicesProducts } from "../services/product-services.js";

const productContainer = document.querySelector("[data-card-product]");

const form = document.querySelector("[data-formulario]")

const delet = document.querySelector("[data-id]")




function createCard(name, price, image, id) {
    const card = document.createElement("div");
    card.classList.add("target_cards");

    card.innerHTML = `  
        <img src="${image}" alt="${name}" class="img_product">
        <p class="text_product">${name}</p>
        <p class="price_product">${price}</p>
          <button class="material-symbols-outlined" data-id="${id}">delete</button> <!-- Establece el data-id con el ID del producto -->
    
    `;
    productContainer.appendChild(card);


    return card;
}

const render = async() => {
    try {
        const listProducts = await servicesProducts.productList();
        listProducts.forEach((product) => {
            productContainer.appendChild(
                createCard(
                    product.name,
                     product.price,
                      product.image,
                       product.id)
            
            )
        });
        
    } catch (error) {
        console.log(error);
        
    }

};

form.addEventListener("submit", (event) =>{
    event.preventDefault();
   const name= document.querySelector("[data-nombre]").value;
   const price= document.querySelector("[data-precio]").value;
   const image= document.querySelector("[data-imagen]").value;

  servicesProducts
  .createProduct(name, price, image)
  .then((response) => console.log(res))
  .catch((err) => console.log(err));
 


});productContainer.addEventListener('click', (event) => {
    if (event.target.classList.contains('material-symbols-outlined')) {
        const productId = event.target.getAttribute('data-id'); // Obtener el ID del atributo data-id
        servicesProducts.deleteProduct(productId)
            .then(() => {
                event.target.parentElement.remove();
            })
            .catch((error) => {
                console.error('Error al eliminar el producto:', error);
            });
    }
});






render();