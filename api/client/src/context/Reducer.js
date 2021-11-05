

export const cartReducer = (state, action) => {
    switch (action.type) {
      case "ADD_TO_CART":
        return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };
      case "REMOVE_FROM_CART":
        return {
          ...state,
          cart: state.cart.filter((c) => c.id !== action.payload.id),
        };
      case "CHANGE_CART_QTY":
        return {
          ...state,
          cart: state.cart.filter((c) =>
            c.id === action.payload.id ? (c.qty = action.payload.qty) : c.qty
          ),
        };
        case "LOGIN_SUCCESS":
          return {
            ...state, user:action.payload
          };

          case "LOGIN_START" : 
          return {
            ...state , user:null,
          };
          case "LOGOUT" : 
          return {
            ...state , user:null,
          }
      default:
        return state;
    }
  };