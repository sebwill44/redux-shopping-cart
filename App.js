import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import CartContainter from "./components/CartContainer"
import {calculateTotals, getCartItems} from './features/cart/cartSlice'
import { useDispatch, useSelector } from "react-redux";
import Modal from "./components/Modal";

function App() {
  const {cartItems, isLoading} = useSelector((store) => store.cart);
  const {isOpen} = useSelector((store) => store.modal);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);
  
  useEffect(() => {
    dispatch(getCartItems());
  }, []);

  if (isLoading) {
    return (
      <div className='loading'>
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
  <main>
    {isOpen && <Modal/>}
    <Navbar></Navbar>
    <CartContainter/>
  </main>
  );
}
export default App;
