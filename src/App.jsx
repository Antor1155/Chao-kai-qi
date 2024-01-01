import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import AnimatingBg from './components/AnimatingBg/AnimatingBg'

function App() {


  return (
    <>
      <AnimatingBg />
      <Navbar></Navbar>
      <mian style={{width: "100vw", overflow: "hidden"}}>
        <Outlet></Outlet>
      </mian>
    </>
  )
}

export default App
