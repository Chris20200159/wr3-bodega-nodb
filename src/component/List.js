import React from 'react';
import Todo from './Todo';

const List = (props) => {
  const productMap = props.products.map( product => {
    return <Todo 
                key={product.id} 
                deleteProduct={props.deleteProduct}
                checkoutProduct={props.checkoutProduct}
                product={product}/>
  })

  return <div className="list-container">
    {productMap}
   </div>
}

export default List;