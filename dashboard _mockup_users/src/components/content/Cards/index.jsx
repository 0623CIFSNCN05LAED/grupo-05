import Card from "../Card"
import { useEffect, useState } from "react";
import { productApi } from "../../../api/productApi";
import { userApi } from "../../../api/userApi";

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

function TotalUsers (stats) {
    const newTotalUsers = stats.meta.total
    return {
        id:"totalUsers",
        name: "Usuarios",
        value: newTotalUsers.toString()
    }
}

function Cards () {
    const [stats,setStats] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
          const resultProducts = await productApi();
          const resultUsers = await userApi();
          console.log(resultUsers)
          setStats(
            [ 
            TotalProducts(resultProducts),TotalBrands(resultProducts),TotalUsers(resultUsers)
            ]
          )
        };
    
        fetchData();

      }, []);

    return (
        <section className="cards">
            {stats.length === 0
            ? (
                <p>Cargando...</p>
                )
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