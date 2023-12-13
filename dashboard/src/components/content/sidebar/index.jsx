import { NavLink } from "react-router-dom";
import "./styles.css"
export default function Sidebar () {
    return (
        <aside className="sidebar">
            <ul className="menu principal">
                <NavLink to="/home" className={({ isActive }) => isActive ? "active" : ""}>
                    <li><i className="bi bi-house"></i><span>Inicio</span></li>
                </NavLink>
                <NavLink to="/sell" className={({ isActive }) => isActive ? "active" : ""}>
                    <li><i className="bi bi-cart"></i><span>Ventas</span></li>
                </NavLink>
                <NavLink to="/client" className={({ isActive }) => isActive ? "active" : ""}>
                    <li><i className="bi bi-people"></i><span>Clientes</span></li>
                </NavLink>
                <NavLink to="/products" className={({ isActive }) => isActive ? "active" : ""}>
                    <li><i className="bi bi-box-seam"></i><span>Productos</span></li>
                    </NavLink>
                <NavLink to="/logout" className={({ isActive }) => isActive ? "active" : ""}>
                    <li><i className="bi bi-box-arrow-in-left"></i><span>Cerrar sesión</span></li>
                </NavLink>
            </ul>
        </aside>
    )
}