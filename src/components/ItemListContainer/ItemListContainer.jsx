import ItemCount from '../ItemCount';
import ItemList from '../ItemList';
import React, {useState, useEffect} from 'react';

const films = [
{ id: 1, image: "https://www.moov.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwbd417659/products/NI_DJ6377-100/NI_DJ6377-100-1.JPG",
title:"Zapatillas Nike Air Force 1 07 Se"},
{ id: 2, image: "https://www.moov.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw7c433248/products/NI_DC5421-002/NI_DC5421-002-1.JPG",
title:"Zapatillas Nike Air Max Intrlk"},
{ id: 3, image: "https://www.moov.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwf6e9825a/products/NI_904538-600/NI_904538-600-1.JPG",
title:"Zapatillas Nike Huarache Se Gg"},

];

export const ItemListContainer = ({saludo}) => {
const [data, setData] = useState([]);

useEffect(() => {
const getData = new Promise(resolve => {
    setTimeout(() => { 
        resolve(films);
        }, 3000);
        });
        getData.then(res => setData(res));

}, [])

    const onAdd = (quantity) => {
        console.log(`compraste ${quantity} unidades`);
    }

    return (
        
        <>
        <h2>{saludo}</h2>
        <ItemCount initial={1} stock={5} onAdd={onAdd} />
        <ItemList data={data} />
        </>
        
    );
    };
    export default ItemListContainer;