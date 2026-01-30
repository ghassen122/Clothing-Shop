import { Routes, Route } from "react-router-dom";
//import './App.css'
import Home from './pages/Home/Home'
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { Login } from "./pages/Login/Login";
import Cart from "./pages/Cart/Cart"
import Order from "./pages/Order/Order";
import Verify from "./pages/Verify/Verify";
import MyOrders from "./pages/MyOrders/MyOrders";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
        <ToastContainer/>
        <Navbar/>
       <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/Login' element={<Login/>}/>
          <Route  path='/Cart' element={<Cart/>}/>
          <Route path='/order' element={<Order />}/>
          <Route path='/Verify' element={<Verify/>}/>
          <Route path='/myorders' element={<MyOrders />}/>
          
        </Routes>
        <Footer/>
    </>
  )
}

export default App
