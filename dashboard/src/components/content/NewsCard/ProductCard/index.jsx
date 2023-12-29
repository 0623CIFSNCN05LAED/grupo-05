import { NavLink } from "react-router-dom"
import "./styles.css"
export default function ProductCard({id,name,created_at,brand,price}) {

    return (
        <div className="card">
            <h2 className="title">Ultimo Producto</h2>
            <div className="container-photo">
                <img src= 'http://localhost:3002/images/products/image-1697515751654.png' alt="photo user" className="photo"/>
            </div>
            <div>
                <h3 className="name">{name}</h3>
                <h5 className="id">{id} </h5>
                <p className="email">Marca: <span className="bold">{brand} </span></p>
                <p className="price">Precio: $  <span className="bold">{price}</span></p>
                <p className="create_date fz-14">Fecha de creacion: <span className="bold fz-14">{created_at} </span></p>
                <div className="containerIcon">
                    <NavLink to={`http://localhost:3002/products/detail/${id}`} className="linkIcon"> 
                        <i className="bi bi-eye"></i> 
                    </NavLink>
                    <NavLink to={`http://localhost:3002/products/edit/${id}`} className="linkIcon">
                        <i className="bi bi-pencil"></i>
                    </NavLink>
                </div>
                
            </div>
        </div>

    )
}