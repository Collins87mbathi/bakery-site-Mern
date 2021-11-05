import React, { useState,useEffect } from 'react'
import {axiosInstance} from '../config';
import { useLocation } from 'react-router';

const Oneproduct = () => {

const [single , setSingle] = useState([]);
 const location = useLocation();
 const id = location.pathname.split("/")[2];

 //fetching single product
   useEffect(()=>{
      const  fetchProducts = async () =>{
         const res = await axiosInstance.get("api/products/find/" + id);
         setSingle(res.data);
         console.log(res.data);
        }; 
       fetchProducts();
         },[id]);



   console.log(single);
    const {img , desc,title} = single;
    return (
        <div className='singleProduct'>
           <img src={img} alt="pic"/>
           <h3>{title}</h3>
           <p className='desc'>{desc}</p>
        </div>
    )
}

export default Oneproduct
