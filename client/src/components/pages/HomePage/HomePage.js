import React, { useEffect, useState, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProductsRequest } from '../../../redux/productsRedux';
import Product from '../../features/Product/Product';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.data);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(getProductsRequest());
  }, [dispatch]);

  const productsPerPage = 12;
  const totalPages = Math.ceil(products.length / productsPerPage);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const productsOnPage = useMemo(() => {
    return products.slice(
      (currentPage - 1) * productsPerPage,
      currentPage * productsPerPage
    );
  }, [products, currentPage, productsPerPage]);

  return (
    <div>
      <section
        className="d-flex row text-center"
        style={{
          height: '350px',
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/background-home.jpg)`,
          backgroundSize: 'cover',
          color: '#2b2b2e',
        }}
      >
         <div className="d-flex justify-content-center align-items-end">
          <span className="display-2 fw-bold"> OUTH </span>
        </div>
      </section>
      <h1 className='ms-auto text-center text-light my-4 py-2'>Our Products</h1>
      <div className="row">
        {productsOnPage.map((product) => (
          <div key={product.id} className="col-md-6 col-lg-4 col-xxl-3">
            <Product product={product} />
          </div>
        ))}
      </div>
      <nav className='d-flex justify-content-center align-items-center mt-4'>
        <ul className='pagination mb-4'>
        <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`} 
            onClick={() => handlePageChange(currentPage - 1)}>
            <button className="page-link" disabled={currentPage === 1}>
              <FaAngleLeft />
            </button>
          </li>
          {Array.from({ length: totalPages }, (_, i) => (
            <li key={i} className={`page-item ${i + 1 === currentPage ? 'active' : ''}`} >
              <button className='page-link' 
                onClick={() => handlePageChange(i + 1)} 
                style={{background: '#000', color: '#fff'} }>
                  {i + 1}
              </button>
            </li>
          ))}
          <li
            className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}
            onClick={() => handlePageChange(currentPage + 1)}
          >
            <button className="page-link" disabled={currentPage === totalPages}>
              <FaAngleRight />
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
