import Card from "../Card"
import { useEffect, useState } from "react";

function Cards () {
    const [stats,setStats] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
          const response = await fetch("http://localhost:3002/api/products");
          const result = await response.json();
          console.log(result.data)
          setStats(result.data);
        };
    
        fetchData();
      }, []);

    return (
        <section className="cards">
            {stats.length === 0
            ? "Cargando..."
            : stats.map((stat) => (
                <Card 
                    key={stat.id}
                    title={stat.name}
                    value={200}
                 />
            ))}
        </section>
    );
}

export default Cards;