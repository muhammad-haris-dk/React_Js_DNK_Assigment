import React from "react";
import Navbar_Compoent from "./Navbar_Compoent";

export default function Hero_Section() {
  return (
    <div className="bg">
      {/* <Navbar_Compoent /> */}
      <div className="container">
        <div className="row">
            <div className="bottom col-md-6">
                <h1 className="top">Raining Offers For Hot Summer!</h1>
                <br />
                <h3>25% Off On All Products</h3>
                <br />
                <button className="btn-1">Shop Now</button>
                <button className="btn-2 ms-4">Find More</button>
            </div>
            <div className="col-md-6"></div>
        </div>
      </div>
    </div>
  );
}
