
import axios from "axios";
import React, { useEffect,useState } from "react";
import { useParams } from "react-router-dom";

export const SingleProductList = () => {
    const {productId} = useParams()
    const [item,setItem] = useState(null);

    useEffect(() => {
    axios({
      method:"get",
      url:`https://movie-fake-server.herokuapp.com/products${productId}`
    })
    .then((res) => setItem(res.item))
    .catch((err) => console.log(err))

}, [productId]);

    // make a request to get the details
  return (
  <>
       <h1>SinglePage</h1>
       {item && <> <img src={item.image}/>
                  <p>{item.title}</p>
                  <p> {item.brand} </p>
                  <p> {item.category} </p>
       </>}
  </>
  )
}
