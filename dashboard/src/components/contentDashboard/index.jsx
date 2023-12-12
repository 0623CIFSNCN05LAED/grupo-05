import { Route, Routes } from "react-router-dom";
import Cards from "../content/Cards";
import ListProducts from "../products";


export default function ContentDashboard() {
    return (
        <section className="container">
            <Routes>
                <Route path="/home" element={<Cards />} />
                <Route path="/products" element={<ListProducts />} />
                <Route path="*" element={<p>404 - página no encontrada</p>} />
            </Routes>
        </section>
    )
}