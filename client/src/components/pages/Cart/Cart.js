import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearCartItems, getCartItems, removeFromCart, updateCartItem } from '../../../redux/cartRedux';
import { Link } from 'react-router-dom';
import styles from './Cart.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const Cart = () => {
  const cartItems = useSelector(getCartItems);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
    updateLocalStorage();
  };

  const handleQuantityChange = (productId, quantity) => {
    dispatch(updateCartItem({ id: productId, quantity: parseInt(quantity, 10) }));
    updateLocalStorage();
  };

  const clearCart = () => {
    dispatch(clearCartItems());
    localStorage.removeItem('cart');
  };

  const updateLocalStorage = () => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  };

  const handleCommentChange = (productId, comment) => {
    dispatch(updateCartItem({ id: productId, userComment: comment }));
  };

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

  useEffect(() => {
    updateLocalStorage();
  }, [cartItems]);

  return (
    <div className="container mt-5">
      <h2 className='text-light'>Your Cart</h2>
      {cartItems.length > 0 ? (
        <div className='table-responsive'>
        <table className={`table ${styles.tablebg}`}>
          <thead>
            <tr>
              <th>Product</th>
              <th>Description</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>
                  <input
                    type="text"
                    value={item.userComment}
                    onChange={(e) => handleCommentChange(item.id, e.target.value)}
                  />
                </td>
                <td>${item.price}</td>
                <td>
                  <input
                    type="number"
                    value={item.quantity}
                    className={styles.formControl}
                    onChange={(e) =>
                      handleQuantityChange(item.id, e.target.value)
                    }
                  />
                </td>
                <td>${item.price * item.quantity}</td>
                <td>
                  <button onClick={() => handleRemoveFromCart(item.id)} className={`btn btn-link remove-button ${styles.btrm}`}>
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          <button onClick={clearCart} 
            className={`btn btn-primary ${styles.bthv} mb-2 mt-2 me-2`} 
            style={{background: '#000', border: '#000'}}>
              Clear Cart
          </button>
          <Link to='/order/summary'>
            <button className={`btn btn-primary ${styles.bthv} mb-2 mt-2`} 
              style={{background: '#000', border: '#000'}}>
                Continue to Summary
            </button>
          </Link>
        </table>
        </div>
        
      ) : (
        <p className='text-light'>Your cart is empty.</p>
      )}
      
    </div>
  );
};

export default Cart;