import React, { useState } from 'react';
import axios from 'axios';
import { API_URL } from '../../../config';
import { useDispatch, useSelector } from 'react-redux';
import { clearCartItems, getCartItems } from '../../../redux/cartRedux';
import styles from './OrderPage.module.scss';

const OrderPage = () => {
  const [orderData, setOrderData] = useState({
    firstName: '',
    lastName: '',
    address: '',
    phone: '',
  });

  const cartProducts = useSelector(getCartItems);
  const dispatch = useDispatch();

  const totalOrderPrice = cartProducts.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  const handleSubmitOrder = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${API_URL}/orders`, orderData);
      if (response.status === 201) {
        alert('Zamówienie zostało złożone pomyślnie.');
        dispatch(clearCartItems());
        window.location.href = '/';
      }
    } catch (error) {
      console.error('Błąd podczas składania zamówienia:', error);
      alert('Wystąpił błąd podczas składania zamówienia. Spróbuj ponownie później.');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setOrderData({ ...orderData, [name]: value });
  };

  return (
    <div className={styles.orderPage}>
      <div className={styles.leftSection}>
        <h2>Order Summary</h2>
        {cartProducts.map((product) => (
          <div key={product.id}>
            <p className={styles.underlinedTop}>{product.name}</p>
            <p>Price: {product.price} PLN</p>
            <p>Quantity: {product.quantity}</p>
            <p>Your Comment: {product.userComment}</p>
            <p className={styles.underlinedBottom}>Total: {product.price * product.quantity} PLN</p>
          </div>
        ))}
        <p>Total Order Price: {totalOrderPrice} PLN</p>
      </div>
      <div className={styles.rightSection}>
        <h2>Contact Details</h2>
        <form onSubmit={handleSubmitOrder}>
          <div className='mb-3'>
            <label>First Name:</label>
            <input
              type="text"
              name="firstName"
              className="form-control"
              value={orderData.firstName}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <label>Last Name:</label>
            <input
              type="text"
              name="lastName"
              className="form-control"
              value={orderData.lastName}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <label>Address:</label>
            <input
              type="text"
              name="address"
              className="form-control"
              value={orderData.address}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <label>Phone:</label>
            <input
              type="text"
              name="phone"
              className="form-control"
              value={orderData.phone}
              onChange={handleInputChange}
            />
          </div>
          <button 
            type="submit" 
            className={`btn btn-primary ${styles.btnhv}`} 
            style={{ background: '#000', border: '#000' }}
          >
            Order
          </button>
        </form>
      </div>
    </div>
  );
};

export default OrderPage;
