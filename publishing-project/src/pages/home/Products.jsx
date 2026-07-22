import { Product } from "./Product"
export function Products({homeProducts}
){
  return(
    <>
    {
      homeProducts.map((product)=>{
        return(
          <Product 
            title={product.title}
            image={product.image}
            number={product.number}
            writer={product.writer}
            key={product.id}
          />
        )
      })
    }
    </>
  )
}