import { createContext, useContext, useEffect, useReducer} from "react";
import {cartReducer} from './Reducer';


const Cart = createContext();



const Context = ({ children }) => {



  
  const [state, dispatch] = useReducer(cartReducer, {
    cart: [],
    user:JSON.parse(localStorage.getItem("user")) || null,
  });

  useEffect(()=>{
    localStorage.setItem("user",JSON.stringify(state.user));
  },[state.user])
  
  return (
    <Cart.Provider value={{ state, dispatch}}>
      {children}
    </Cart.Provider>
  );
};
export const CartState = () => {
  return useContext(Cart);
};

export default Context;