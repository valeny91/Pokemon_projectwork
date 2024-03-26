import React from 'react'
import CardList from '../../Components/Card/CardList'
import Card from '../../Components/Card/Card'

const ProductPage = () => {
  return (
    <>
        <CardList />
          <Card
            pokemon={{
              images: {
                small: "",
                large: "",
              },
              id: 0,
              name: "",
            }}
          />
    </>
  )
}

export default ProductPage