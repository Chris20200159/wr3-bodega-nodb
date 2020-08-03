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
    this.editProduct=this.editProduct.bind(this)

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

  editProduct = (id, title) => {
    axios.put(`/api/products/${id}`, {title})
    .then((response) => {
      this.setState({product: response.data})
    })
    .catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        <Header/>
        <Form addProduct={this.addProduct}/>
        <List 
        deleteProduct={this.deleteProduct}
        editProduct={this.editProduct} 
        products={this.state.products}/>

      </div>
    )};
};

export default App;
