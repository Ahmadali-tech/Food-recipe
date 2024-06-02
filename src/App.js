import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Product from './components/Product';
import Cart from './components/Cart';
import Debetics from './components/Debetics';
import CartcontextProvider from './components/Cartcontext';
import Showproductprovider from './components/Showproduct';
import LoginComponent from './components/LoginComponent';
import Register from './components/Register';
import Recipe from './components/Recipe';
import Footer from './components/Footer';
import Tradition from './components/Tradition';
import Vegeterain from './components/Vegeterain';
import Checkout from './components/Checkout';
import './App.css';
import Healthy from './components/Healthy';
import ReviewSection from './components/Reviewsection';
import Nonvegetarian from './components/Nonvegetarian';

function App() {
  return (
    <div className="main-class">
      <Router>
        <CartcontextProvider>
          <Showproductprovider>
            <Navbar />
            <Routes>
              <Route path="/LoginComponent" element={<LoginComponent />} />
              <Route path="/Cart" element={<Cart />} />
              <Route path="/DebeticsFood" element={<>
                <Debetics />
                <ReviewSection />
                <Footer />
              </>} />
              <Route path="/Tradition" element={<>
                <Tradition />
                <ReviewSection />
                <Footer />
              </>} />
              <Route path="/Vegetarian" element={<>
                <Vegeterain />
                <ReviewSection />
                <Footer />
              </>} />
              <Route path="/Nonvegetarian" element={<>
                <Nonvegetarian />
                <ReviewSection />
                <Footer />
              </>} />
              <Route path="/Register" element={<Register />} />
              <Route path="/Healthy" element={<>
                <Healthy />
                <ReviewSection />
                <Footer />
              </>} />
              <Route path="/Recipe" element={<Recipe />} />
              <Route path="/Checkout" element={<Checkout/>}/>
              <Route path="/Product" element={<>
                <Product/>
                <ReviewSection />
                <Footer />
              </>} />
              <Route path="/Cart" element={<>
                <Cart/>
                <ReviewSection />
                <Footer />
              </>} />
            </Routes>
          </Showproductprovider>
        </CartcontextProvider>
      </Router>
    </div>
  );
}

export default App;
