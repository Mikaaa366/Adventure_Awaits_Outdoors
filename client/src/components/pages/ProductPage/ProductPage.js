import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

import { IMG_URL } from "../../../config";
import { addToCart } from "../../../redux/cartRedux";
import { getProductsRequest } from "../../../redux/productsRedux";
import styles from './ProductPage.module.scss';

const ProductPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const products = useSelector((state) => state.products.data);
  const [product, setProduct] = useState(null);
  const [activeThumbnail, setActiveThumbnail] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (products.length === 0) {
      dispatch(getProductsRequest());
    } else {
      const currentProduct = products.find(item => item.id === id);
      if (currentProduct) {
        setProduct(currentProduct);
        setActiveThumbnail(0);
      }
    }
  }, [dispatch, products, id]);

  const images = product ? Array.from({ length: 4 }, (_, index) =>
    `${IMG_URL}/${product.name.replace(/ /g, '')}${index + 1}.jpg`
  ) : [];

  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value, 10);
    setQuantity(newQuantity);
  };

  const handleIncrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleThumbnailClick = (index) => {
    setActiveThumbnail(index);
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const handleAddToCart = () => {
    if (product) {
      dispatch(addToCart({ ...product, quantity }));
      updateLocalStorage();
    }
  };

  const updateLocalStorage = () => {
    const updateCart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingProductIndex = updateCart.findIndex((item) => item.id === product.id);
    if (existingProductIndex !== -1) {
      updateCart[existingProductIndex].quantity += quantity;
    } else {
      updateCart.push({ ...product, quantity });
    }
    localStorage.setItem('cart', JSON.stringify(updateCart));
  };

  const moveToNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex < images.length - 1 ? prevIndex + 1 : prevIndex
    );
  };

  const moveToPrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : prevIndex
    );
  };

  return (
    <div className={`container mt-5 ${styles.productContainer}`}>
      {product ? (
        <div className="row">
          <div className="col-md-6 order-md-last">
            <div className={styles.customMainImageContainer}>
              <img
                className={styles.customMainImage}
                src={images[activeThumbnail]}
                alt={product.name}
                onClick={() => handleThumbnailClick(activeThumbnail)}
              />
            </div>
            <div className={`d-flex flex-row ${styles.customThumbnail}`}>
              {images.map((src, index) => (
                <img
                  key={index}
                  className={`${styles.customThumbnail} ${activeThumbnail === index ? styles.active : ''}`}
                  src={src}
                  alt={`Thumbnail ${index + 1}`}
                  onClick={() => handleThumbnailClick(index)}
                />
              ))}
            </div>
          </div>
          <div className="col-md-6 order-md-first">
            <h2 className={styles.text}>{product.name}</h2>
            <p className={styles.text}>Price: {product.price} PLN</p>
            <div className="mb-3">
              <label htmlFor="quantity" className={styles.label}>
                Quantity:
              </label>
              <div className="input-group">
                <span className={styles.inputBtnGroup}>
                  <button
                    type="button"
                    className={`btn btn-primary ${styles.btnhv}`}
                    style={{ background: '#000', border: '#4e342e'}}
                    onClick={handleDecrementQuantity}
                  >
                    -
                  </button>
                </span>
                <input
                  type="number"
                  className={styles.formControl}
                  id="quantity"
                  min="1"
                  value={quantity}
                  onChange={handleQuantityChange}
                />
                <span className={styles.inputBtnGroup}>
                  <button
                    type="button"
                    className={`btn btn-primary ${styles.btnhv}`}
                    style={{ background: '#000', border: '#4e342e'}}
                    onClick={handleIncrementQuantity}
                  >
                    +
                  </button>
                </span>
              </div>
            </div>
            <button
              onClick={handleAddToCart}
              className={`btn btn-primary ${styles.btnhv}`}
              style={{ background: '#000', border: '#4e342e'}}
            >
              Add to Cart
            </button>
            <p className={`mt-4 ${styles.text}`}>{product.description}</p>
          </div>
        </div>
      ) : (
        <p>Product not found.</p>
      )}
      {lightboxOpen && (
        <Lightbox
          mainSrc={images[currentImageIndex]}
          nextSrc={images[(currentImageIndex + 1) % images.length]}
          prevSrc={images[(currentImageIndex + images.length - 1) % images.length]}
          onCloseRequest={() => setLightboxOpen(false)}
          onMovePrevRequest={moveToPrevImage}
          onMoveNextRequest={moveToNextImage}
        />
      )}
    </div>
  );
};

export default ProductPage;
