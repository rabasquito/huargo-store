import { FaShoppingCart } from 'react-icons/fa';
import { IconContext } from "react-icons";

function CartWidget() {
    return (
        <IconContext.Provider value={{ color: "white"}}>
            <div>
                <FaShoppingCart />
            </div>
        </IconContext.Provider>
    );
  }
  
  export default CartWidget;
  