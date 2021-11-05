import React, { useState,useEffect} from 'react'
import Singleproduct from './Singleproduct';
import './Product.css';
import {axiosInstance} from '../config';
const Product = () => {
    const [product, setProduct] = useState([]);

    // fetching products data
    useEffect(()=>{
      const  fetchProducts = async () =>{
        
        const res = await axiosInstance.get("api/products" );
        setProduct(res.data);
        
      }
      fetchProducts();
     
    },[]);
   
    return (
        <div className="products">
            <div className="titles">
                <h1 className="title">features</h1>
                <p className='welcome'>
                    We offer different kind of backeries while maintaining customers preferences
                    and specifications
                </p>
            </div>
            {/*  */}
        <div className='product'>
            <ul className='list-product'>
                <Singleproduct data = {product}/>
            </ul>
        </div>

        </div>
    )
}

export default Product
