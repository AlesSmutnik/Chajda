import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/HomePage';
import MyGallery from './pages/MyGallery';
import Contact from './pages/ContactForm';
import InfoPrice from './pages/InfoPrice';
import SharedLayout from './components/SharedLayout';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return( <div className='body-app'>
 <BrowserRouter>
      <Routes>
        <Route element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/MyGallery" element={<MyGallery />} />
          <Route path="/ContactForm" element={<Contact />} />
          <Route path="/InfoPrice" element={<InfoPrice />} />
          <Route path="/InfoPrice" element={<InfoPrice />} />
          
          </Route>
      </Routes>
      
    </BrowserRouter>
    
    </div>

);
  
};

export default App