import React, {useEffect, useState} from 'react';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.css';



export default function shopping({categories, products})
{
    //const [filteredProducts, setFilteredProducts] = useState([]);
    

    function handleCategoryChange(event) {
        // console.log('==> ' + event.target.value);
        // if ('All' === event.target.value) {
        //     setFilteredProducts(products);
        // } else {
        //     setFilteredProducts(products.filter(product => product.category=== event.target.value));
        // }
    }

    return(
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-3">
                        <h3>Select Category</h3>
                        <select className="form-select" onChange={handleCategoryChange}>
                            (
                                    {
                                        categories.map(category => 
                                            <option value={category} key={category}>{category}</option>    
                                        )
                                    }
                            )
                        </select>
                    </div>
                    <div className="col-9">
                        <div className="d-flex flex-wrap">
                            {
                                products.map(product=>
                                    <div className="card m-3 w-25" key={product.id}>
                                        <img src={product.image} alt={product.title} height="200" className="card-img-top"/>
                                        <div className="card-header">
                                            <p>{product.title}</p>
                                        </div>
                                    </div>    
                                )
                            }
                        </div>
                    </div>

                </div>

            </div>
        </>
    );
}

export async function getStaticProps() {
    const res = await fetch("https://fakestoreapi.com/products/categories");
    const categories = await res.json();
    categories.unshift("All");
    const productDetails = await fetch('https://fakestoreapi.com/products');
    const products = await productDetails.json();

    return{
        props:{
            categories,
            products
        }
    };    
}
