import { Route, Routes } from "react-router-dom";
import Cards from "../content/Cards";
import ListProducts from "../products";
import ListUsers from "../users";
import News from "../news";



export default function ContentDashboard() {
    return (
        <section className="container">
            <Routes>
                <Route path="/" element={<Cards />} />
                <Route path="/news" element={<News />} />
                <Route path="/products" element={<ListProducts />} />
                <Route path="/users" element={<ListUsers/>} />                
                <Route path="*" element={<p>404 - página no encontrada</p>} />
            </Routes>
        </section>
    )
}