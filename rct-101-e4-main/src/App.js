import "./App.css";
import {Routes,Route} from "react-router-dom"
import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";
 import Login from "./pages/Login"
 import Home from "./pages/Home" 
 
function App() {
  return <div className="App"> 
  <Navbar/>

  <Routes>
  <Route path ="/"  element={<Home/>} />  
   <Route path ="/products" element={<Products/>}/> 
   <Route path ="/login" element={<Login/>}/> 

 
  </Routes>
 
  </div>;
}

export default App;
