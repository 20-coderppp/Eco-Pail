const btnCart = document.querySelector('.container-icon')
const containerCarProducts = document.querySelector('.container-cart-products')

btnCart.addEventListener('click', () => {
containerCarProducts.classList.toggle('hidden-cart')
})