import { Routes, Route } from 'react-router-dom';
import  Header  from '../src/components/common/Header/Header';
import Home from './components/pages/HomePage/HomePage';
import Footer from './components/common/Footer/Footer';
const App = () => {

  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;