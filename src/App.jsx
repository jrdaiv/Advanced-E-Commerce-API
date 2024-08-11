
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux';
import { store } from './store';
import UserContext from './context/UserContext';
import NavBar from './components/NavBar';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';
import Home from './components/Home';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css'




function App() {

  const queryClient = new QueryClient();

  const [user, setUser] = useState({
    email: '',
    password: '',
    userName: '',
    isLoggedIn: false
  });




  return (


    <>


    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <UserContext.Provider value={{ user, setUser }}>
          <Router>
            {/* <NavBar /> */}
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/products' element={<Products />} />
              <Route path='/cart' element={<ShoppingCart />} />
            </Routes>
            {/* <Footer /> */}
          </Router>
        </UserContext.Provider>
      </Provider>
    </QueryClientProvider>
      


    </>


  )


}

export default App
