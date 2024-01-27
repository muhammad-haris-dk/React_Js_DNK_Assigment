import React from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home_Component from "../pages/Home_Compoent";
import Product_Details from "../pages/Product_Details";
import Layout from "../pages/Layout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home_Component />} />
      <Route path="/product/:id" element={<Product_Details />} />
    </Route>
  )
);
export default function Router_App() {
  return <RouterProvider router={router} />;
}
