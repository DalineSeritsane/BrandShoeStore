
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Category from './Page/Category';
import Shop from "./Page/Shop";
import Product from './Page/Product';
import Cart from "./Page/Cart";
import Login from "./Page/Login";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/nike' element={<Category category="nike"/>}/>
        <Route path='/puma' element={<Category category="puma"/>}/>
        <Route path='/valentino' element={<Category category="valentino"/>}/>
        <Route path="/product" element={<Product/>}/>
        <Route path=':productId' element={<Product/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      </BrowserRouter>
    </div>
 
    
  );
}

export default App;
