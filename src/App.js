import React, { useState, useEffect } from 'react';
import './App.css';
import './common/constants/globalStyles.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RegisterContainer from './modules/register/registercontainer.tsx';
import HomeContainer from './modules/home/home.container.tsx'
import { HeaderContainer } from './common/components';


function App() {


  return (

    <Router>
      <HeaderContainer />
      <Routes>
        {/* <Route path='/f' element={<Product />} />
      <Route path='/prod/:id' element={<Prod />} /> */}
        <Route path='/register' element={<RegisterContainer />} />
        <Route path='/' element={<HomeContainer />} />
      </Routes>
    </Router>

  );
}



export default App;
