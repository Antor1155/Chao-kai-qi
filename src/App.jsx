import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import AnimatingBg from './components/AnimatingBg/AnimatingBg'
import FooterSection from './components/FooterSection/FooterSection'

import { ScrollRestoration } from "react-router-dom";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {


  return (
    <>
      <ScrollRestoration />
      <AnimatingBg />
      <Navbar></Navbar>
      <mian style={{ width: "100vw", overflow: "hidden" }}>
        <Outlet></Outlet>
      </mian>
      <ToastContainer />
      <FooterSection></FooterSection>
    </>
  )
}

export default App
