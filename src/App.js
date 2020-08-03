import React, { Component } from 'react';
import axios from 'axios';
import './reset.css';
import './App.css';
import './component/List.css';
import './component/Todo.css';
import Header from './component/Header';
import List from './component/List';
// import Form from './component/Form';

class App extends Component {
  constructor(){
    super();
    this.state = {
      products: []
    }
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

  render() {
    return (
      <div>
        <Header/>
        {/* <Form/> */}
        <List products={this.state.products}/>

      </div>
    )};
};

export default App;
