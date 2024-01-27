import React from 'react'
// import { Navbar } from 'react-bootstrap'
import { Outlet } from 'react-router-dom'
import Navbar_Compoent from '../components/Navbar_Compoent'
import Footer_Component from '../components/Footer_Component'

export default function Layout() {
  return (
    <div>
      <Navbar_Compoent />
      <Outlet />
      <br /><br />
      <Footer_Component />
    </div>
  )
}
