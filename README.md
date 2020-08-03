Visual mock-up <a href="https://www.figma.com/file/T6QhHOUVUl7loy687poxtr/First-Project-No-DB?node-id=0%3A1">Here</a>

#WR3's Glorious TO DO LIST! 

## MVP
Description: A bodega store app that allows user to buy corner store items online for home delivery.
</br>

npx create-react-app project-bodega

Features:
- User can add grocery item
- User can view current shopping list
- User can delete grocery item
- User can edit quantity of grocery item in shopping list
- User can check out

### SERVER
Dependencies:
-express

Endpoints:
-app.get("/api/products")
-app.post("/api/products")
-app.delete("/api/products/:id")
-app.put("/api/products/complete/:id")
-app.put('/api/products/edit/:id")

Structure:
-server/
  -index.js
  -controller.js
  -products.json

 -Update package.json
  -"main": "./server/index.js",
  -"proxy": "http://localhost:####", 
//This connects our backend with our frontend

### CLIENT
Dependencies;
- axios

Structure:
- src/
  - app.js
  - app.css
  - reset.css
  - components/
    - header.js
    - header.css
    - form.js
    - form.css
    - list.js
    - list.css
    - task.js
    - task.css
    
-import each css into their component; header.css into header.js
-import each component into app.js

### ICE BOX
-Live form-of-payment buttons
-Check out with redirect page that allows user to enter contact info, payment info, etc.
-Image of items instead of just name/title. ("Banana".jpeg instead of just Banana)