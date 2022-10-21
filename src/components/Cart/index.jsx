import { addDoc, collection, getFirestore } from 'firebase/firestore';
import React, {useState, } from "react";
import { Link } from 'react-router-dom';
import { useCartContext } from "../../context/CartContext";

import ItemCart from "../ItemCart";

const Cart = () => {
    
    const { cart, totalPrice, clearCart,} = useCartContext();
    

        const [nombre, setNombre] = useState('');
        const [apellido, setApellido] = useState('');
        const [phone, setPhone] = useState('');
        const [mail, setMail] = useState('');
        


    const order = {


        buyer: {
            nombre: nombre,
            apellido: apellido,
            phone: phone,
            mail: mail,
        },
        items: cart.map(product => ({ id: product.id, title: product.title, price: product.price, quantity: product.quantity })) ,

        total: totalPrice(),
    }

    const [idCompra, setIdCompra] = useState('');
    const handleId = (id) => {
        setIdCompra(id);
    };
    if (idCompra) {
        return <h1>Gracias por comprar tu id es: {idCompra}</h1>;
    }

    const handleClick = () => {
        clearCart();
        const db = getFirestore();
        const ordersCollection = collection(db, 'orders');
        addDoc(ordersCollection, order)
        .then(({ id }) => handleId(id)
        
        
        )

        


    }    
const handleChangeNombre = (e) => {
    setNombre(e.target.value);
} ;
const handleChangeApellido = (e) => {
    setApellido(e.target.value);
  };

  const handleChangePhone = (e) => {
    setPhone(e.target.value);
  };

  const handleChangeMail = (e) => {
    setMail(e.target.value);
  };


    if (cart.length === 0){
        return (
            <>
            <p>No hay elementos en el carrito</p>
            <Link to= '/'>Hacer compras</Link>
            </>
        );
    }

    return (
        <>
        {
            cart.map(product => <ItemCart key={product.id} product={product} /> )
        }
        

        
        <p>
            total: {totalPrice()}
        </p>
        
        
<div>
<div style={{ marginTop: '20px' }}>
            
                <input
                    type="text"
                    placeholder="Nombre..."
                    name="nombre"
                    value={nombre}
                    onChange={handleChangeNombre}
                />
                <input
                    type="text"
                    placeholder="Apellido..."
                    name="apellido"
                    value={apellido}
                    onChange={handleChangeApellido}
                />
                <input
                    type="text"
                    placeholder="numero de celular..."
                    name="phone"
                    value={phone}
                    onChange={handleChangePhone}
                />
                <input
                    type="text"
                    placeholder="Email..."
                    name="email"
                    value={mail}
                    onChange={handleChangeMail}
                />
                <button onClick={handleClick}>Emitir compra</button>
            
        </div>
</div>
        
        
        </>

    )


}


export default Cart;