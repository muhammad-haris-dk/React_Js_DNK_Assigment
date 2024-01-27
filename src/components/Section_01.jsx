import React, { useState } from "react";
import Product from "../pages/Product";
import Product_Card_02 from "../pages/Product_Card_02";

export default function Section_01() {
  const [data, setData] = useState(false);

  const seeMore = () => {
    setData(true)
  };
  const lessmore = () => {
    setData(false)
  }
  return (
    <div className="container">
      <h1 className="text-center mt-5">Featured Products</h1>
      <br />
      <div
        style={{
          border: "1px solid blue",
          marginRight: "45%",
          marginLeft: "45%",
        }}
      ></div>
      <br />
      <Product />

      {
        data === true ? <div><Product_Card_02 /> <div className="button-1"><button className="button-1-btn" onClick={lessmore}>Less More</button></div></div> : <div className="button-1">
        <button className="button-1-btn" onClick={seeMore}>
          See More
        </button>
      </div> 
      }
    </div>
  );
}
