import "./styles.css"
export default function ProductCard({id,name,created_at,brand}) {

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
                <p className="create_date">Fecha de creacion: <span className="bold">{created_at} </span></p>
                
            </div>
        </div>

    )
}