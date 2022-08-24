import React from 'react';
import classes from './App.module.css';
import { Route, Switch } from 'react-router-dom';
import Layout from './container/HOC/Layout';
import Products from './components/Products/Products';
import FavoriteProducts from './components/Products/FavoriteProducts/FavoriteProducts';
import Cart from './components/Cart/Cart';
import FavoriteProvider from './context/FavoriteContext';
import CartProvider from './context/CartContext';
import Factor from "./components/Factor/Factor";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './components/Home/Home';
import SearchProvider from './context/SearchContext';
import ProductPage from './components/Products/Product/ProductPage/ProductPage';
function App(props) {
  // console.log("<App/> rendered");
  return (
    <>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css" integrity="sha512-5A8nwdMOWrSz20fDsjczgUidUBR8liPYU+WymTZP1lmY9G6Oc7HlZv156XqnsgNUzTyMefFTcsFH/tnJE/+xBg==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" integrity="sha512-SfTiTlX6kk+qitfevl/7LibUOeJWlt9rbyDn92a1DqWOw9vWG2MFoays0sgObmWazO5BQPiFucnnEAjpAB+/Sw==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      <CartProvider>
        <FavoriteProvider>
          <SearchProvider>
            <div className={classes.App}>
              <div className={classes.container}>
                <Layout>
                  <ToastContainer />
                  <Switch>
                    <Route component={Home} exact path='/' />
                    <Route component={Products} path='/product' exact />
                    <Route component={FavoriteProducts} path='/favorite-products' />
                    <Route component={Cart} path='/cart' />
                    <Route component={Factor} exact path="/factor" />
                    <Route component={ProductPage} path="/product-page/:id" />
                  </Switch>
                </Layout>
              </div>
            </div>
          </SearchProvider>
        </FavoriteProvider>
      </CartProvider>
    </>
  );
}


export default App;
