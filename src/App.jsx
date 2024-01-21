import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import AnimatingBg from './components/AnimatingBg/AnimatingBg'
import FooterSection from './components/FooterSection/FooterSection'

import { ScrollRestoration } from "react-router-dom";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react'
import CatagoryBrands from './components/CatagoryBrands/CatagoryBrands'

function App() {
  const [isCatagoryOpen, setCatagoryOpen] = useState(true)

  return (
    <>
      <ScrollRestoration />
      <AnimatingBg />
      <Navbar setCatagoryOpen={setCatagoryOpen}></Navbar>
      <CatagoryBrands isCatagoryOpen={isCatagoryOpen} setCatagoryOpen={setCatagoryOpen}></CatagoryBrands>
      <mian style={{ width: "100vw", overflow: "hidden" }}>
        <Outlet></Outlet>
      </mian>
      <ToastContainer />
      <FooterSection></FooterSection>
    </>
  )
}

export default App
