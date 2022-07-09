import React from 'react'
import ProductsPurchase from './ProductsPurchase'
import "./Styles/PurchasesCard.css"

const PurchasesCard = ({purchase}) => {
  console.log(purchase.updateAt)
  return (
    <article className='puchase-card'>
      <div className='date-container'>
        <h3>Date: {purchase.updatedAt}</h3>
      </div>
      {
        purchase.cart.products.map(product => (
          <ProductsPurchase 
            key={product.id}
            product={product}
          />
        ))
      }
    </article>
  )
}

export default PurchasesCard