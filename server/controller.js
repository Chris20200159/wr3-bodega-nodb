const products = require ('./products.json');
let id = 6;

module.exports = {
  getProducts: (req, res) => {
    res.status(200).send(products)
  },
  addProduct: (req, res) => {
    const { title } = req.body;
    if(!title) {
      res.status(405).send('Expected to receive a title for the product')
    } else {
      const newProduct = {
        id,
        title, 
        completed: false
      };
      products.push(newProduct);
      id++;
      res.status(200).send(products);
    }
  }, 
  deleteProduct: (req, res) => {
    const index = products.findIndex( product => product.id === +req.params.id)
    if (index === -1){
      res.status(404).send('Product item not found in list')
    } else {
      product.splice(index, 1)
      res.status(200).send(products)
    }
  },
  editProduct: (req, res) => {
    const {id} = req.params
    const {title} = req.body
    const index = product.findIndex((element) => {
      return elememnt.id === +id
    })
    product[index].title = title
    return res.status(200).send(products)
  }
}