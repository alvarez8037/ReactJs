import React from "react";
import { useCartContext } from '../../context/CartContext';

export const CartWidget = () => {
    const {totalProducts} = useCartContext();
    return ( 
        <>
        <i class="material-symbols-sharp">shopping_cart</i>
        <span>{totalProducts() || ''}</span>
        </>
    );
}

export default CartWidget;
