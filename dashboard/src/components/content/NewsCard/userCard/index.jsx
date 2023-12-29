import { NavLink } from "react-router-dom"
import "./styles.css"
export default function UserCard({id,first_name,last_name,email,created_at,image}) {
    return (
        <div className="card">
            <h2 className="title">Ultimo usuarios</h2>
            <div className="container-photo">
                <img src={`http://${image}`} alt="photo user" className="photo"/>
            </div>
            <div>
                <h3>{first_name} {last_name}</h3>
                <h5 className="id">{id}</h5>
                <p className="email">Email: <span className="bold">{email}</span></p>
                <p className="create_date fz-14">Fecha de creacion: <span className="bold fz-14">{created_at}</span></p>
                <div className="containerIcon">
                    <NavLink to={`http://localhost:3002/users/detail/${id}`} className="linkIcon"> 
                        <i className="bi bi-eye"></i> 
                    </NavLink>
                    <NavLink to={`http://localhost:3002/users/edit/${id}`} className="linkIcon">
                        <i className="bi bi-pencil"></i>
                    </NavLink>
                </div>
            </div>
        </div>

    )
}