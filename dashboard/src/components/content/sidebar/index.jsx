export default function Sidebar () {
    return (
        <aside className="sidebar">
            <ul className="menu principal">
                <li><i className="bi bi-house"></i><span>Inicio</span></li>
                <li><i className="bi bi-cart"></i><span>Ventas</span></li>
                <li><i className="bi bi-people"></i><span>Clientes</span></li>
                <li><i className="bi bi-box-seam"></i><span>Productos</span></li>
                <li><i className="bi bi-box-arrow-in-left"></i><span>Cerrar sesión</span></li>
            </ul>
        </aside>
    )
}