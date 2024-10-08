
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux';
import { store } from './store';
import UserContext from './context/UserContext';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';
import Settings from './components/Settings';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css'
import Footer from './components/Footer';




function App() {
  const queryClient = new QueryClient();

  const [user, setUser] = useState(() => { 
    let currentUser = sessionStorage.getItem("user");
    if (currentUser) {
      return JSON.parse(currentUser);
    }

  })





  return (


    <>


    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <UserContext.Provider value={{ user, setUser}}>
          <Router>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/products' element={<Products />} />
              <Route path='/cart' element={<ShoppingCart />} />
              <Route path='/settings' element={<Settings />} />
            </Routes>
          </Router>
          <Footer/>
        </UserContext.Provider>
      </Provider>
    </QueryClientProvider>
      


    </>


  )


}

export default App
