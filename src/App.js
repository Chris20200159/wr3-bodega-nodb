import React, { Component } from 'react';
import axios from 'axios';
import './reset.css';
import './App.css';
import './component/List.css';
import './component/Todo.css';
import './component/Form.css';
import Header from './component/Header';
import List from './component/List';
import Form from './component/Form';

class App extends Component {
  constructor(){
    super();
    this.state = {
      products: []
    }
    this.addProduct = this.addProduct.bind(this)
    this.deleteProduct = this.deleteProduct.bind(this)
    this.checkoutProduct=this.checkoutProduct.bind(this)

  }

  componentDidMount(){
    this.getProducts();
  };

  getProducts = () => {
    axios.get('/api/products')
    .then( res => {
      this.setState({
        products: res.data
      })
    }
   ).catch( err => console.log(err))
  };

  addProduct = (e, title) => {
    e.preventDefault()
    axios.post('/api/products', {title})
    .then( res => {
      this.setState({
        products: res.data
      })
    }).catch( err => console.log(err))
  };

  deleteProduct = (id) => {
  axios.delete(`/api/products/${id}`)
  .then(res => {
    this.setState({
      products: res.data
      })
    }).catch( err => console.log(err))
  };

  checkoutProduct = (id) => {
    axios.put(`/api/products/complete/${id}`)
    .then((response) => {
      this.setState({product: response.data})
    })
    .catch(err => console.log(err))
  }

  render() {
    const completedProducts = this.state.products.reduce((acc, cur) => {
    return (cur.completed ? acc + 1 : acc + 0)
    }, 0)
    console.log(completedProducts)
    return (
      <div>
        <Header completed={completedProducts}/>
        <Form addProduct={this.addProduct}/>
        <List 
        deleteProduct={this.deleteProduct}
        checkoutProduct={this.checkoutProduct} 
        products={this.state.products}/>

      </div>
    )};
};

export default App;
