import { BrowserRouter } from "react-router-dom";
import Dashboard from "./components/dashboard";
import Header from "./components/content/header";

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Dashboard />
    </BrowserRouter>
  )
}

export default App
