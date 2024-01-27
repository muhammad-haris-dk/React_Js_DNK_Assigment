import React from "react";
import logo from "../assets/logo.png";
import {
  FaFacebook,
  FaYoutube,
  FaInstagram,
  FaTwitter,
  FaGoogle,
} from "react-icons/fa";

export default function Footer_Component() {
  return (
    <div className="container-fluid bg-dark ">
      <div className="row">
        <div className="col-md-3 mt-5 d-flex align-items-center flex-column ">
          <img src={logo} />
          <br />
          <h5 className="text-white">The best look anytime,anywhere</h5>
        </div>
        <div className="col-md-3 mt-5 d-flex align-items-center flex-column justify-content-start ">
          <h5 className="text-white">For Her</h5>
          <br />
          <button className="text-white">Women Jeans</button>
          <button className="text-white">Tops and Shirts</button>
          <button className="text-white">Women Jackets</button>
          <button className="text-white">Heels and Flats</button>
          <button className="text-white">Women Accessories</button>
        </div>
        <div className="col-md-3 mt-5 d-flex align-items-center flex-column ">
          <h5 className="text-white">For Him</h5>
          <br />
          <button className="text-white">Mens Jeans</button>
          <button className="text-white">Mens Shirts</button>
          <button className="text-white">Men Shoes</button>
          <button className="text-white">Men Accessories</button>
          <button className="text-white">Men Jackets</button>
        </div>
        <div className="col-md-3 mt-5 d-flex align-items-center flex-column ">
          <h5 className="text-white">Subscribe</h5>
          <br />
          <input
            placeholder="Your email address..."
            className="bg-dark border-white p-2 text-white"
            type="email"
          />
          <br />
          <button className="btn border-white text-white px-5">
            Subscribe
          </button>
        </div>
      </div>
      <br />
      <hr className="border-white" />
      <div className="row">
        <div className="col-md-6">
          <p className="text-white">
            Copyright 2024 Brandstore.Powered by Branstore.
          </p>
        </div>
        <div className="col-md-6 d-flex justify-content-end text-white fs-6 ">
          <div className="me-3">
            <FaFacebook />
          </div>
          <div className="me-3">
            <FaYoutube />
          </div>
          <div className="me-3">
            <FaTwitter />
          </div>
          <div className="me-3">
            <FaInstagram />
          </div>
          <div className="me-3">
            <FaGoogle />
          </div>
        </div>
      </div>
    </div>
  );
}
