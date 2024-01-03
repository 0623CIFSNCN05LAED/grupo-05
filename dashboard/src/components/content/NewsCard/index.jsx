import { useEffect, useState } from "react"
import "./styles.css"
import { lastProductApi } from "../../../api/productApi";
import ProductCard from "./ProductCard";
import { lastUserApi } from "../../../api/userApi";
import UserCard from "./userCard";
import { useRevalidator } from "react-router-dom";


export default function NewsCard () {

    const [product ,setProduct] = useState([]);
    const [user ,setUser] = useState([]);

    useEffect (() => {
        const fetchData = async () => {
            const resultProduct = await lastProductApi();
            const resultUser = await lastUserApi();
            //console.log(resultUser)
            setProduct(resultProduct)
            setUser(resultUser)
            
          };
      
          fetchData();

    }, []);
    console.log(product)
    console.log(user)

    return (
        <div className="cards">
        {product.length === 0 ? 
            <p>Cargando...</p> :
            
                <ProductCard  
                    id = {product.id}
                    name = {product.name}
                    created_at = { product.created_at}
                    brand={product.brand}
                    price={product.price}
                    image = {product.image}
                />
            
        } 
        {user.length === 0 ?
            <p>Cargando...</p> :
        
        <UserCard 
                id = {user.id}
                first_name = {user.first_name}
                last_name = {user.last_name}
                email = {user.email}
                created_at = {user.created_at}
                image = {user.image}
                />
        }
        </div>
    )
}