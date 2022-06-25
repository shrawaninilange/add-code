import React from "react";
 import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux/es/exports";
 import { getp } from "../../store/product/product.actions";
const Products = () => {
  // const [products, setproduct] = useState([]);
  // // useEffect(() => {
  //   fetch(`http://localhost:8080/products`)
  //   .then((r)=>r.json())
  //   .then((d) =>setproduct(d))
  // }, []);

const dispatch =useDispatch()
const state = useSelector((state) => state.product.productReducer)
useEffect(()=>{
  getp(dispatch)
})

 
  return <div> 
    {state.map((e) => {
          return (
            
              <div key={e.id}>
                <h1 >{e.name}</h1> 
              </div>
              
             
          );
        })}
  </div>;
};

export default Products;
