import ItemCount from '../ItemCount';


export const ItemListContainer = ({saludo}) => {

    const onAdd = (quantity) => {
        console.log(`compraste ${quantity} unidades`);
    }

    return (
        
        <>
        <h2>{saludo}</h2>
        <ItemCount initial={1} stock={5} onAdd={onAdd} />
        </>
        
    );
    };
    export default ItemListContainer;