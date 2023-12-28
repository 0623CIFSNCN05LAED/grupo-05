import "./styles.css"
import { userApi } from "../../api/userApi";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";


export default function ListUsers() {

    

    const [users,setUsers] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
          const result = await userApi();
          setUsers(result.data)
          console.log("Usuarios:" + users);
        };
    
        fetchData();

      }, []);
    return (
        <section className="table-section">
                    <table className="user-table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Nombre y apellido</th>
                                <th>Email</th>
                                <th>Tipo de usuario</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.length === 0
                                ? (
                                    <tr>
                                        <td>Cargando...</td>
                                    </tr>
                                  )
                                : users.map((user,index) => (
                                    <tr key={user.id}>
                                        <td>{user.id}</td>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.category}</td>
                                        <td className="actions">
                                            <NavLink to={`http://localhost:3002/users/detail/${user.id}`} className="linkIcon"> 
                                                <i className="bi bi-eye"></i> 
                                            </NavLink>
                                            <NavLink to={`http://localhost:3002/users/edit/${user.id}`} className="linkIcon">
                                                <i className="bi bi-pencil"></i>
                                            </NavLink>
                                            <NavLink to={`http://localhost:3002/api/users/delete/${user.id}`} className="linkIcon">
                                                <i className="bi bi-trash"></i> 
                                            </NavLink>
                                        </td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                    {users.length === 0
                            ? "Cargando..."
                            : users.map((user) => (
                                <div className="mobile-user-card" key={user.id}>
                                    <h3>{user.first_name}</h3>
                                    <span className="art">id: {user.id}</span>
                                    <p className="email">{user.emial}</p>
                                    <div className="user-actions">
                                        <i className="bi bi-eye"></i>
                                        <i className="bi bi-pencil"></i>
                                        <i className="bi bi-trash"></i>
                                    </div>
                                </div>
                    ))}
                </section>
    )
}