import React, { useEffect, useState } from "react";

import "./Products.css";
import axios from "axios";
import { Product } from "./Product";

export const Products = () => {

    const [ products, setProducts ] = useState([])

    useEffect(() => {
        axios({
            method: 'GET',
            url: "http://localhost:3010/products"
            })
            .then(res => {
                setProducts(res.data)
            })
            .catch(err => console.error(err))
    }, []); 
      
    return (
        <div>
            <div className="products-container">
                {products?.map(product => 
                    <Product key={product.id} product={product}/>
                    )
                }
            </div>
        </div>
    )

}
