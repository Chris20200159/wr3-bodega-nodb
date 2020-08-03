import React, {Component} from 'react';

class Form extends Component {
  constructor(){
    super();
    this.state = {
      title: ""
    }
  }

  titleHandler = (e) => {
    this.setState({
      title: e.target.value
    })
  }

  render(){
    
    return <div className="form-container">
        <form onSubmit={e => {
          this.props.addProduct(e, this.state.title)
          this.setState({title:""})
        }}>
          <input value={this.state.title} 
          type="text" 
          placeholder="Add to shopping list.."
          onChange={(e) => this.titleHandler(e)}/>
          <button className="form-elem form-btn">Add Item</button>


        </form>

    </div>
  }
}

export default Form;