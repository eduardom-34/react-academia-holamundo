


interface Product {
  id: string
  name: string
}

interface Props {
  products: Product[]
}

export const ProductList = ({ products }: Props) => {

  return (
    <ul>
      {products.map(p => <li key={p.id}>{p.name}</li>)}
    </ul>
  )
}
