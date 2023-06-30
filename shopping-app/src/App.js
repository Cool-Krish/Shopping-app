import logo from './logo.svg';
import './App.css';
import Navbar from './NavBar/NavBar';
import { Route, Routes } from 'react-router-dom';
import Products from './components/Products';
import Cart from './components/Cart';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Navbar image={logo}/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="products" element={<Products/>} />
        <Route path="cart" element={<Cart/>} />
      </Routes>
    </div>
  );
}

export default App;
