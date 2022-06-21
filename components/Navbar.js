import React from 'react';
import { CartIcon, Testing } from '../icons';
import { useSelector } from 'react-redux';

// use selector alows you to acces the entire store

const Navbar = () => {
    // how we access data from our slice. pick component, useUseselector, pass function, chose what you want to return
    const {amount} = useSelector((store) => store.cart);
    return(
        <nav>
            <div className='nav-center'>
                <h3> Redux Toolkit </h3>
                <div className='nav-container'>
                    <Testing/>
                    <CartIcon />
                    <div class="amount-container">
                        <p className='total-amount'> {amount} </p>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;