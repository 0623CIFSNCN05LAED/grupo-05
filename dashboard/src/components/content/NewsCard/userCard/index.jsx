import "./styles.css"
export default function UserCard() {
    return (
        <div className="card">
            <h2 className="title">Ultimo usuarios</h2>
            <div className="container-photo">
                <img src="http://localhost:3002/images/users/default_user.png" alt="photo user" className="photo"/>
            </div>
            <div>
                <h3>Jorge Koury</h3>
                <h5 className="id">id</h5>
                <p className="email">Email: <span className="bold">jorge_ koury@me.com</span></p>
                <p className="create_date">Fecha de creacion: <span className="bold">12/03/1997</span></p>
                
            </div>
        </div>

    )
}