import React, { useEffect, useState } from "react";
import './itemDetailContainer.css';
import ItemDetail from "../ItemDetail";


    const film = { id: 1, image: "https://www.moov.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwbbd21fce/products/NI_DD8959-104/NI_DD8959-104-1.JPG", 
    title: "Zapatillas Nike AirForce 107" } ;

export const ItemDetailContainer = () => {
    const [data, setData] = useState({});
    useEffect(() =>{
const getData = new Promise(resolve => {
    setTimeout(() => {
        resolve(film);
    }, 3000);
    });
    getData.then(res => setData(res));
    },[])
    

    return (
        <ItemDetail data={data} />
    );
}
export default ItemDetailContainer;