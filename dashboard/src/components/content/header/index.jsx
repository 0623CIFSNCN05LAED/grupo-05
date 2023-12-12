import logo from "../../../assets/logo_devvision.png";

export default function Header () {
    return (
        <header>
            <div className="logo">
                <img src={logo} alt="Logo Empresa" />  {/* Self-closing tag for img */}
            </div>
            <div className="search-box">
                <input type="search" placeholder="Buscar..." />  {/* Self-closing tag for input */}
                <i className="bi bi-search"></i>  {/* Icon for search (ensure you have the relevant icons/fonts included) */}
            </div>
        </header>
    );
}