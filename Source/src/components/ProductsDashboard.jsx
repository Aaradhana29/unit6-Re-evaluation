import React, { useEffect, useState } from "react";
import { useDispatch  } from "react-redux";
import { getproductsData } from "../Redux/actions";
import { Link } from "react-router-dom"
import "./products.css"
export const Products = () => {
  // to get all products list on component mounts

  const [data, setData] = useState([])
  const [loading, setloading] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    //   dispatch an action to the store
    // dont make call here
    // handle it as thunk call in actions.js
    dispatch(getproductsData())
  }, [dispatch]);

  //    sort by price
  const handleSort = (e) => {
    // dispach handle sort action to the store

  };
  return (
    <>
      <h2>Products</h2>
      <select onChange={handleSort}>
        <option>--sort by --</option>
        <option value="asc">low to high</option>
        <option value="desc">high to low</option>
      </select>
      <div className="products-list" style={{border:"1px solid black"}}>
        {/* map throught th products  list and display the results */}
        {loading && <h2> Loading........</h2>}
        {!loading && data && data.map((item) => {
            return <>  {/* display the results here */}
                  <Link key={item.id} to={`/products/${item.id}`}>
                  <img src={item.image}/>
                  <p>{item.title}</p>
                  <p> {item.brand} </p>
                  <p> {item.category} </p>
                  </Link>
            </>;
          })}
      </div>
    </>
  );
};
