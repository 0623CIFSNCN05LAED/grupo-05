import Card from "../Card"
import { useEffect, useState } from "react";

function TotalProducts(stats) {
    const newTotalProducts =stats.meta.totalsByCategory.reduce((sum, total) => sum + total.ProductCount, 0);
    return {
        id:"totalProducts",
        name: "Total de productos",
        value: newTotalProducts.toString()
    }
}
function TotalBrands (stats) {
    const newTotalBrand = stats.meta.totalsByCategory.map((brand) => brand.id_brand)
    return {
        id:"totalBrands",
        name: "Total de Marcas",
        value: newTotalBrand.length.toString()
    }
}

function TotalSell () {
    return {
        id:"totalSell",
        name: "Ventas",
        value: "$ 200.000"
    }
}






function Cards () {
    const [stats,setStats] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
          const response = await fetch("http://localhost:3002/api/products");
          const result = await response.json();
          setStats(
            [ 
            TotalProducts(result),TotalBrands(result),TotalSell()
            ]
          )
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
                    value={stat.value}
                 />
            ))}
        </section>
    );
}

export default Cards;