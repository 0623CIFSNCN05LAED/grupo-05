import { useEffect, useState } from "react"
import "./styles.css"
import { lastProductApi } from "../../../api/productApi";
import ProductCard from "./ProductCard";


export default function NewsCard () {

    const [product ,setProduct] = useState([]);

    useEffect (() => {
        const fetchData = async () => {
            const resultProduct = await lastProductApi();
            //const resultUser = await userApi();
            //console.log(resultUser)
            setProduct(resultProduct)
            
          };
      
          fetchData();

    }, []);
    console.log(product)

    return (
        <div className="cards">
        {product.length === 0 ? 
            <p>Cargando...</p> :
            <ProductCard  
                id = {product.id}
                name = {product.name}
                created_at = { product.created_at}
                brand={product.brand}
            />
        }
            
        </div>
    )
}