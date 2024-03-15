
import {Filters, ProductsContainer, PaginationContainer} from '../components'
import { customFetch } from '../utils'
const url = '/products'

export const loader = async ({request}) =>{
  const params = Object.fromEntries([...new URL(request.url).searchParams.entries()])
  console.log(params);

  const response = await customFetch(url,{
    params,
  })
  console.log(response);
  const products = response.data.data;
  console.log(products);
  const meta = response.data.meta;
  console.log(meta);
  return {products, meta, params}
} 

const Products = () => {
    return (
      <>
        <Filters />
        <ProductsContainer/>
        <PaginationContainer />
      </>
    );
  }
  
  export default Products;
  