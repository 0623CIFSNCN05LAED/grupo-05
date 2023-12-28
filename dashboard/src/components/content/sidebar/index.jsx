import { NavLink } from "react-router-dom";
import "./styles.css"
export default function Sidebar () {
    return (
        <aside className="sidebar">
            <ul className="menu principal">
                <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>
                    <li><i className="bi bi-house"></i><span>Inicio</span></li>
                </NavLink>
                <NavLink to="/news" className={({ isActive }) => isActive ? "active" : ""}>
                    <li><i className="bi bi-newspaper"></i><span>Novedades</span></li>
                </NavLink>
                <NavLink to="/users" className={({ isActive }) => isActive ? "active" : ""}>
                    <li><i className="bi bi-people"></i><span>Usuarios</span></li>
                </NavLink>
                <NavLink to="/products" className={({ isActive }) => isActive ? "active" : ""}>
                    <li><i className="bi bi-box-seam"></i><span>Productos</span></li>
                    </NavLink>
            </ul>
        </aside>
    )
}