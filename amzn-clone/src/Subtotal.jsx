import React from 'react';
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';
import { useNavigate } from "react-router-dom";

// import { SportsBasketball } from '@material-ui/icons';

function Subtotal() {
  const history = useNavigate();
  // eslint-disable-next-line no-unused-vars
  const [{ basket }, dispatch] = useStateValue();
   

    return (
        <div className="subtotal">
           <CurrencyFormat 
           renderText={(value) =>(
               <>
               <p>
                   subtotal ({basket.length} items):
                   <strong>{value}</strong>
               </p>
               <small className="subtotal__gift">
                   <input type="checkbox" /> This order contains a gift
               </small>
               </>
           )}
           decimalScale={2}
           value={getBasketTotal(basket)}
           displayType={"text"}
           thousandSeparator={true}
           prefix={'$'}
           />
           <button onClick={e => history('/payment')} >Proceed to checkout</button>
        </div>
    )
}

export default Subtotal
