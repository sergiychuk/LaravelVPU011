// import React from 'react';
// import logo from './logo.svg';

import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './components/home';
import LoginPage from './components/auth/login';
import RegisterPage from './components/auth/register';
import DefaultLayout from './components/containers/default';
import AddProductPage from './components/add_product';
import EditProductPage from './components/edit_product';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<DefaultLayout/>}>
          {/*Підключаємо роутинг на головну сторінку*/}
          <Route index element={<HomePage/>}/>
          {/*Підключаємо роутинг на сторінку авторизації*/}
          <Route path="login" element={<LoginPage/>}/>
          {/*Підключаємо роутинг на сторінку реєстрації*/}
          <Route path="register" element={<RegisterPage/>}/>
          {/*Підключаємо роутинг на сторінку додавання продукту*/}
          <Route path="add_product" element={<AddProductPage/>}/>
          <Route path="edit_product" element={<EditProductPage/>}/>
        </Route>
      </Routes>
    </>
  );
};

export default App;
