import React from 'react'
import "./Styles/PurchasesCard.css"

const ProductsPurchase = ({ product }) => {

  console.log(product)

  return (
    <section className='Purchase-Datials'>
      <h3 className='ProductPurchase-tittle'>Products</h3>
      <ul>
        <div className='container-ProductsDatials' >
          <h4>{product.title}</h4>
          <p>{product.productsInCart.quantity}</p>
          <p>$ {product.price}</p>
        </div>

      </ul>

    </section>
  )
}

export default ProductsPurchase