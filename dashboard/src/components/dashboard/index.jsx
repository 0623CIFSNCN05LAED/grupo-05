import Sidebar from "../content/sidebar";
import ContentDashboard from "../contentDashboard";

function Dashboard () {
    return (
        <div className="dashboard">
            <Sidebar />
            <ContentDashboard />
        </div>
    )
}

export default Dashboard