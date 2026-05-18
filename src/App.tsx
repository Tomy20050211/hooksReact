'use client'
import { useState } from "react";
import "./App.css";

function App() {
   const [products, setProducts] = useState([
     {name: "Coca-Cola"}
   ]);

   const [newProduct, setNewProduct] = useState("")
  

   function handleProducts() {
  const product = {
    name: newProduct
  }

  setProducts([...products, product])
  setNewProduct("")
}

return (
  <section>
     <div className="divProduct">
        {products.map((product, i ) => {
          return (
            <div key={i}>
               <h1>
                {product.name}
               </h1>
            </div>
          )
        })}
     </div>

     <input type="text" value={newProduct} onChange={(e) => setNewProduct(e.target.value)} />
     <button onClick={handleProducts}>Add</button>
  </section>
)
};



export default App;