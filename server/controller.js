const products = require ('./products.json');
let id = 11;

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
  }
}