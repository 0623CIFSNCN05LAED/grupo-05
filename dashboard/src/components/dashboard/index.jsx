import Cards from "../content/Cards";
import Sidebar from "../content/sidebar";

export default function Dashboard () {
    return (
        <div className="dashboard">
        <Sidebar />
            <section className="container">
                <Cards />
                <section>
                    <p>otra cosa</p>
                </section>
            </section>
    </div>
    )
}