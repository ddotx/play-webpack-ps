const util = require('./util')

const cart = []

function addToCart(item) {
  cart.push(item)
  util.log('Item added to cart' + item)
}

function removeFromCart(idx) {
  cart.splice(idx, 1)
  util.log('Item removed from cart: ', idx)
}

addToCart('apple')