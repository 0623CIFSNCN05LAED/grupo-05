import "./styles.css"
import { productApi,deleteProductApi,activateProductApi } from "../../api/productApi";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";


export default function ListProducts() {

    

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
            const result = await productApi();
            setProducts(result.data);
            setLoading(false);
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleSubmit = async (productId, stateProduct) => {
        try {
            if (stateProduct) {
                await deleteProductApi(productId);
            } else {
                await activateProductApi(productId);
            }
            await fetchData();
        } catch (error) {
            console.error("Error updating product:", error);
        }
    };

    if (loading) {
        return <p>Cargando...</p>;
    }

    return (
        <section className="table-section">
                    <table className="product-table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Artículo</th>
                                <th>Nombre</th>
                                <th>Cantidad</th>
                                <th>Precio</th>
                                <th>Activo</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.length === 0
                                ? (
                                    <tr>
                                        <td>Cargando...</td>
                                    </tr>
                                  )
                                : products.map((product,index) => (
                                    <tr key={product.id}>
                                        <td>{index}</td>
                                        <td>{product.id}</td>
                                        <td>{product.name}</td>
                                        <td>{100} </td>
                                        <td>{"$ 100.000"}</td>
                                        <td>{product.active ? "Habilitado" : "Desabilitado"}</td>
                                        <td className="actions">
                                            <NavLink to={`http://localhost:3002/products/detail/${product.id}`} className="linkIcon"> 
                                                <i className="bi bi-eye"></i> 
                                            </NavLink>
                                            <NavLink to={`http://localhost:3002/products/edit/${product.id}`} className="linkIcon">
                                                <i className="bi bi-pencil"></i>
                                            </NavLink>
                                            <button onClick={() => handleSubmit(product.id,product.active)} className="buttonLink">
                                                {product.active ?  <i className="bi bi-toggle-on"></i> :<i className="bi bi-toggle-off"></i>}
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                    {products.length === 0
                            ? "Cargando..."
                            : products.map((product) => (
                                <div className="mobile-product-card" key={product.id}>
                                    <h3>{product.name}</h3>
                                    <span className="art">id: {product.id}</span>
                                    <p className="description">{product.description}</p>
                                    <div className="product-details">
                                        <span className="price">Precio: $ 100.000</span>
                                        <span className="quantity">Cantidad: 100</span>
                                    </div>
                                    <div className="product-actions">
                                            <NavLink to={`http://localhost:3002/products/detail/${product.id}`} className="linkIcon"> 
                                                <i className="bi bi-eye"></i> 
                                            </NavLink>
                                            <NavLink to={`http://localhost:3002/products/edit/${product.id}`} className="linkIcon">
                                                <i className="bi bi-pencil"></i>
                                            </NavLink>
                                            <button  onClick={() => handleSubmit(product.id,product.active)} className="buttonLink">
                                                {product.active ?  <i className="bi bi-toggle-on"></i> :<i className="bi bi-toggle-off"></i>}
                                            </button>
                                    </div>
                                </div>
                    ))}
                </section>
    )
}