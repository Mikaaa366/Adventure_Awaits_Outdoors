import { Routes, Route } from 'react-router-dom';
import Header from '../src/components/common/Header/Header';
import Home from './components/pages/HomePage/HomePage';
import Footer from './components/common/Footer/Footer';
import { Container } from 'react-bootstrap';
import ProductPage from './components/pages/ProductPage/ProductPage';
import Cart from './components/pages/Cart/Cart';
import OrderPage from './components/pages/OrderPage/OrderPage';
import NotFound from './components/pages/NotFound/NotFound';
import CustomFooter from './components/common/CustomFooter/CustomFooter';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateCartItem } from './redux/cartRedux';
import './styles/normalize.scss';
import './styles/global.scss';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const cartState = JSON.parse(localStorage.getItem('cart'));
    if (cartState) {
      cartState.forEach((item) => {
        dispatch(
          updateCartItem({
            id: item.id,
            quantity: item.quantity,
          })
        );
      });
    }
  }, [dispatch]);

  return (
    <div>
      <Header />
      <Container>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/product/:id' element={<ProductPage />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order/summary' element={<OrderPage />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Container>
      <CustomFooter />
      <Footer />
    </div>
  );
};

export default App;
