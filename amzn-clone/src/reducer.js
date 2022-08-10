/* eslint-disable no-unused-vars */
import { CardActions } from "@material-ui/core";
import { StarRate } from "@material-ui/icons";
import { StateContext } from "./StateProvider";

export const initialState = {
  basket: [],
  user: null
};
//selector
export const getBasketTotal = (basket) =>
basket?.reduce((amount, item) =>item.price+amount, 0);

const reducer = (state, action) =>{
    console.log(action);
    switch (action.type) {
        case 'ADD_TO_BASKET':
            return{
                ...state,
                basket: [...state.basket, action.item],
            };

         case 'EMPTY_BASKET':
            return{
                ...state,
                basket: []
            }  
             
        case "REMOVE_FROM_BASKET":
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            );
            let newBasket = [...state.basket];

            if(index>=0){
                newBasket.splice(index, 1);

            }else{
                console.warn(
                    // eslint-disable-next-line no-template-curly-in-string
                    'Can not remove product (id: ${action.id}) as its not in basket'
                )
            }
            
            return{
                ...state,
                basket: newBasket
            }

            case "SET_USER":
                return {
                    ...state,
                    user: action.user
                }
               
        default:
            return state;
    }
};

export default reducer;