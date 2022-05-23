import{createContext,useState} from 'react'
import { DataCustom } from "../Data";

 const CartBuy=createContext();



export function CartProvider({children}){

    const [cart, setCart] = useState()

    const [data, setData] = useState(DataCustom)

    const [displayCart, setDisplayCart] = useState(false);

   

    return(
        <CartBuy.Provider value={{cart ,setCart,data,displayCart,setDisplayCart}}>
        {children}
        </CartBuy.Provider>
    )
}


export default CartBuy;