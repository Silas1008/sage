import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Shop from './pages/Shop/Shop';
import ShopCategory from './pages/ShopCategory/ShopCategory';
import Product from './pages/Product/Product';
import Cart from './pages/Cart/Cart';
import LoginSignup from './pages/LoginSignup/LoginSignup';
import Signup from './pages/LoginSignup/Signup';
import Footer from './components/Footer/Footer';
import bannerhair from './components/assets/images/bannerhair.png';
import bannerface from './components/assets/images/bannerface.png';
import bannerbody from './components/assets/images/bannerbody.png';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Shop />} />
        <Route path='/hairs' element={<ShopCategory banner={bannerhair} category="hair" />} />
        <Route path='/faces' element={<ShopCategory banner={bannerface} category="face" />} />
        <Route path='/bodys' element={<ShopCategory banner={bannerbody} category="body" />} />
        <Route path='/product' element={<Product />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<LoginSignup />} />
        <Route path='/signup' element={<Signup/>}/>

        {/* Catch-all route for 404 errors */}
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;

// Add a NotFound component to handle 404 errors
function NotFound() {
  return <h1>404 - Not Found</h1>;
}
