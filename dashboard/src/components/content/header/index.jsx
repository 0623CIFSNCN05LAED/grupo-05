import logo from "../../../assets/logo_devvision.png";

export default function Header () {
    return (
        <header>
            <div className="logo">
                <img src={logo} alt="Logo Empresa" />
            </div>
            <div class="navbar">
            <div class="search-box">
                <input type="search" placeholder="Buscar..."/>
                <i class="bi bi-search"></i>
            </div>
            <div class="user">
                <span>JK</span>
            </div>
        </div>
        </header>
    );
}