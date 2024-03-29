import React from 'react';
import { Link } from 'react-router-dom';
import { IMG_URL } from '../../../config';
import styles from './Product.module.scss';

const Product = ({ product }) => {
  return (
    <div className="card" style={{ width: '18rem', margin: '20px 0' }}>
      <img 
        src={`${IMG_URL}/${product.mainImage}`} 
        className="cardImgTop" 
        alt={product.name} 
        style={{ objectFit: 'fill', height: '300px', width: '250px', padding: '10px 0 10px 20px' }}
      />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">Price: {product.price} PLN</p>
        <Link 
          to={`/product/${product.id}`} 
          className={`btn btn-primary ${styles.bthv}`}
          style={{ background: '#000' }}
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default Product;
