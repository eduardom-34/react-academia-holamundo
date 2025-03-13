import { useState } from "react"
import Button from "./components/Button";
// import { ProductDashboard } from "./components/ProductDashboard";
import { ProductList } from "./components/ProductList";
// import Button from "./components/Button";


export const App = () => {


  const [products, setProducts] = useState([
    {
      id: Math.random().toString(),
      name: 'Iphone'
    },
  ]);

  const addStart = () => {

    let product = { id: Math.random().toString(), name: 'Surfboard' }
    setProducts([product, ...products])
  }

  const addEnd = () => {

    let product = { id: Math.random().toString(), name: 'Guitarra electrica' }
    setProducts([...products, product])
  }

  const delEnd = () => {
    setProducts(products.slice(0, -1))
  }

  const clear = () => {
    setProducts([]);
  }



  return (
    <div>
      <Button onClick={addStart}>Comienzo</Button>
      <Button onClick={addEnd}>Final</Button>
      <Button onClick={delEnd}>Eliminar ultimo</Button>
      <Button onClick={clear}>Limpiar</Button>
      <ProductList products={products} />
    </div>
  )
}
