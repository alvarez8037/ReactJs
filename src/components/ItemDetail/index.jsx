import './itemDetail.css';
import React from "react";

export const ItemDetail = ({ data }) => {
    return (
        <div className="container">
  <div className="detail">
    <img className='detail_image' src={data.image} alt="" />
    <div className="content">
    <h1>{data.title}</h1>
    <h2>precio: $180</h2>
    <p>descripcion: 
        Diseñadas para vos que te arriesgás a todo y que no pasas desapercibida, ideales para que vivas todas las aventuras posibles con las Zapatillas Nike Air Force 1 07 con capas de cuero sintético, te ofrece un look urbano y moderno lleno de texturas y ritmo. Su entresuela ancha y suela ranurada te ofrece ligereza y amortiguación en cualquier superficie para que vayas segura dando pasos estables y con un estilo único característico de la marca.</p>
    </div>
  </div>
</div>
    );
}
export default ItemDetail;