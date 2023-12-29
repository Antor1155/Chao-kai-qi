import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'

function App() {


  return (
    <>
      <Navbar></Navbar>
      <mian>
        <Outlet></Outlet>
      </mian>
    </>
  )
}

export default App
