import ItemCount from '../ItemCount';
import ItemList from '../ItemList';
import React, {useState, useEffect} from 'react';

const films = [
{ id: 1, image: "https://hbomax-images.warnermediacdn.com/images/GYGP7pwQv_ojDXAEAAAFc/tileburnedin?size=1280x720&partner=hbomaxcom&v=bd4e8b8745a1fcccbb19d76012ae572e&host=art-gallery.api.hbo.com&language=es-419&w=1280",
title:"interestellar"},
{ id: 2, image: "https://hbomax-images.warnermediacdn.com/images/GYUM6xA7RxcLDwgEAAABo/tileburnedin?size=1280x720&partner=hbomaxcom&v=bdb11dc10013e502e6442b3583397a05&host=art-gallery.api.hbo.com&language=es-419&w=1280",
title:"star trek"},
{ id: 3, image: "https://hbomax-images.warnermediacdn.com/images/GYF4TjQOX7MLCOQEAAAJ-/tile?size=640x360&partner=hbomaxcom&v=fa5275ab7a1489eae0ee8379f1a308bc&host=art-gallery.api.hbo.com&language=en-us",
title:"ronin"},

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