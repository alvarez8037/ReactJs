
import ItemList from '../ItemList';
import { useParams } from 'react-router-dom'
import React, {useState, useEffect} from 'react';

const films = [
{ id: 1, price: 140, image: "https://www.moov.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwbd417659/products/NI_DJ6377-100/NI_DJ6377-100-1.JPG",
category: 'nike', title:"Zapatillas Nike Air Force 1 07 Se"},
{ id: 2, price: 160, image: "https://www.moov.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw7c433248/products/NI_DC5421-002/NI_DC5421-002-1.JPG",
category: 'nike', title:"Zapatillas Nike Air Max Intrlk"},
{ id: 3, price: 170, image: "https://www.moov.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwf6e9825a/products/NI_904538-600/NI_904538-600-1.JPG",
category: 'nike', title:"Zapatillas Nike Huarache Se Gg"},
{ id: 4, price: 140, image: "https://www.moov.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwf1fb639b/products/AD_FY7978/AD_FY7978-1.JPG",
category: 'adidas', title:"Zapatillas adidas Forum Low"},
{ id: 5, price: 150, image: "https://www.moov.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwce2a0c16/products/AD_HR1169/AD_HR1169-1.JPG",
category: 'adidas', title:"Zapatillas adidas Ozweego"},

];

export const ItemListContainer = ({saludo}) => {
const [data, setData] = useState([]);

const {categoriaId} = useParams();

useEffect(() => {
const getData = new Promise(resolve => {
    setTimeout(() => { 
        resolve(films);
        }, 3000);
        });

        if (categoriaId) {
            getData.then(res => setData ( res.filter(nike => nike.category === categoriaId)));
        } else {
            getData.then(res => setData(res));
        }
        
        

}, [categoriaId])

    
    return (
        
        <>
        <h2>{saludo}</h2>
        
        <ItemList data={data} />
        </>
        
    );
    };
    export default ItemListContainer;