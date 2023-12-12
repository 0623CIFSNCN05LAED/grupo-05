import "./styles.css"

export default function ListProducts() {
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
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Artículo 1</td>
                                <td>Nombre del Producto</td>
                                <td>100</td>
                                <td>$ 100.000</td>
                                <td className="actions">
                                    <i className="bi bi-eye"></i>
                                    <i className="bi bi-pencil"></i> 
                                    <i className="bi bi-trash"></i> 
                                </td>
                            </tr>
                           
                        </tbody>
                    </table>
                    <div className="mobile-product-card">
                        <h3>Nombre del Producto</h3>
                        <span className="art">art</span>
                        <p className="description">Descripción breve...</p>
                        <div className="product-details">
                            <span className="price">Precio: $ 100.000</span>
                            <span className="quantity">Cantidad: 100</span>
                        </div>
                        <div className="product-actions">
                            <i className="bi bi-eye"></i>
                            <i className="bi bi-pencil"></i>
                            <i className="bi bi-trash"></i>
                        </div>
                    </div>
                </section>
    )
}