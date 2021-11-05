import React from 'react'
import { CartState } from '../context/Context'

import  { Link } from 'react-router-dom';

const Singleproduct = ({data}) => {
   const {dispatch} = CartState();
       
   const done =  data.map((data)=> {
      return <div key={data._id}>
         <Link to={`/item/${data._id}`}>
          <li className='singleimg'>
              <img src={data.img} alt='pics'/>
          </li>
          </Link>
         <li className='singletitle'>{data.title}</li>
          <div className='carts'>
         <li className='singlebutton'><button className='cartbutton' onClick={() => dispatch({
                  type: "ADD_TO_CART",
                  payload: data,
                })
              } >ADD</button></li>
         <li className='singleprice'>shs : {data.price}</li>
         </div>
      </div>
    })
    return ( 
            <>
           {done}
           </> 
    )
}

export default Singleproduct
