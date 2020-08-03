import React from 'react';

const Todo = (props) => {
  return <div className="todo-item">
    <h1 className="product-title">{props.product.title}</h1>
    <div className='btn-container'>
      <button 
        className="product-btn" 
        onClick={() => props.deleteProduct(props.product.id)}>x</button>
    </div>


  </div>
};

export default Todo;