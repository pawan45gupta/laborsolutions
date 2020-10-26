import React, { useState, useEffect } from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import SignIn from './Components/SignIn';
import Product from './Components/Product';
import NotFound from './Components/NotFound';
import Register from './Components/Register';
import Home from './Components/Home';

function App() {
  const [isLoginSuccess, setLoginSuccess] = useState(false);
  useEffect(() => {
    if(isLoginSuccess === true) {
      window.location.href = "/home";
    } 
  } , [isLoginSuccess]);

  const products = [
      {
        id:1,
        name: 'Men Jacket',
        imageUrl: 'http://images.thenorthface.com/is/image/TheNorthFace/236x204_CLR/mens-better-than-naked-jacket-AVMH_LC9_hero.png',
        description: 'Men Blue Jacket with side pockets and zip at $60 only'        
      },
      {
        id:2,
        name: 'Women Jacket',
        imageUrl: 'http://images.thenorthface.com/is/image/TheNorthFace/236x204_CLR/womens-better-than-naked-jacket-AVKL_NN4_hero.png',
        description: 'Women Blue Jacket with side zip pockets at $50 only' 
      },
      {
        id:3,
        name: 'Shoe',
        imageUrl: 'http://images.thenorthface.com/is/image/TheNorthFace/236x204_CLR/womens-single-track-shoe-ALQF_JM3_hero.png',
        description: 'Trakking Shoe for rough and tough usage at $30 only' 
      },
      {
        id:4,
        name: 'Bag Pack',
        imageUrl: 'http://images.thenorthface.com/is/image/TheNorthFace/236x204_CLR/enduro-boa-hydration-pack-AJQZ_JK3_hero.png',
        description: 'Hydration Pack for suitable journey at $70 only'
      }
    ];

  function renderProducts(routerProps) {
    let productId = parseInt(routerProps.match.params.id)
    let foundProduct = products.find(product => product.id === productId)
    return (foundProduct ? <Product product={foundProduct}/> : <NotFound/>)
  }

  function signIn() {
    const email = localStorage.getItem('email');
    const password = localStorage.getItem('password');
    const emailText = document.getElementById("email").value;
    const passwordText = document.getElementById("password").value;
    if(email === emailText && password === passwordText) {
      setLoginSuccess(true);
    } else {
      setLoginSuccess(false);
    }
  }

  return (
    <div className="App">
      <Switch>
        <Route exact path = '/' render = {() => <SignIn signIn={signIn}/>} />
        <Route exact path = '/register' component = {Register} />
        <Route exact path = '/home' render = {() => <Home isLoginSuccess={isLoginSuccess} products={products} />} />
        <Route path = '/product/:id' render = {routerProps => renderProducts(routerProps)} />
        <Route component = {NotFound} />
      </Switch>
    </div>
  );
}

export default App;
