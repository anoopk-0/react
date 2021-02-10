import React from "react";
import { Link } from 'react-router-dom';

const ProductList = [
    { id: 1, name: "Product 1" },
    { id: 2, name: "Product 2" },
    { id: 3, name: "Product 3" }
];

const Products = () => {
    return (
        <div className="Product">
            Product!!
            <ul>
                {ProductList.map(product => (
                    <li key={product.id}>
                        <Link to={`/product/${product.id}`}>{product.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Products;