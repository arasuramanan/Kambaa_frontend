import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './Signup';
import Login from './Login';
import Navbar from '../src/Components/Navbar'; 
import { Shop } from './pages/shop/shop';
import { Cart } from './pages/cart/cart';
import { ShopContextProvider } from './context/shop-context';


function App() {
  return (
    <div className='App'>
      <ShopContextProvider>
          <BrowserRouter>
              <Routes>
                <Route path='/register' element={<Signup />} />
                <Route path='/' element={<Login />} />
                <Route path='/shop/*' element={<><Navbar /><Shop/></>}/>
                <Route path='/cart/*' element={<><Navbar /><Cart/></>}/>
              </Routes>
          </BrowserRouter>
      </ShopContextProvider>
    </div>
  );
}

export default App;
