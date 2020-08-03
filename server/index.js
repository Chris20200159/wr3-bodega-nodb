const express = require('express');
const ctrl = require ('./controller');
const app = express();
const port = 5004;

app.use(express.json());

app.get("/api/products", ctrl.getProducts)
app.post("/api/products", ctrl.addProduct)
app.delete("/api.products/:id", ctrl.deleteProduct)


app.listen(port, () => console.log(`Server listening up on port ${port}`));