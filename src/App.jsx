import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Homepage, Cart } from './pages'
import { Navbar } from './components'
import { Provider } from 'react-redux';
import store from './store/store'
const App = () => {
  return (
    <div className="app">
      <Provider store={store}>
        <BrowserRouter >
          <Navbar />
          <Routes >
            <Route path='/' element={<Homepage />}></Route>
            <Route path='/cart' element={<Cart />}></Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>

  )
}

export default App
