import React from 'react'
import ProductsPurchase from './ProductsPurchase'
import "./Styles/PurchasesCard.css"



  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

const PurchasesCard = ({purchase}) => {

  const dateData = new Date(purchase.updatedAt)

  const datePurchase = `${months[dateData.getMonth()]} ${dateData.getDate()}, ${dateData.getFullYear()}`



  console.log(purchase.updateAt)
  return (
    <article className='puchase-card'>
      <div className='date-container'>
        <h3>Date: {datePurchase}</h3>
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