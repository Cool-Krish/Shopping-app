import { useContext } from "react";
import ContextApi from "./CotextAPI"
import './style.css'


function Cart(){
const {cartdata, setCartData} = useContext(ContextApi)
// useEffect(()=>{
//     console.log(cartdata)
// })
const removeFromCart = (index) => {
    const updatedCartItems = [...cartdata];
    updatedCartItems.splice(index, 1);
    setCartData(updatedCartItems);
  };
    return<>
    <div className="cartcontainer">
        {cartdata &&
          cartdata.map((item, index)=>{
           return (<div className="productcard">
                <div className="image">
                    <img src={item.image} alt="" />
                </div>
                <div className="cartinfo">
                    <h2>{item.title}</h2>
                    <p>Price : $ {item.price}</p>
                    <p> Category : {item.category}</p>
                    <p>Description : {item.description}</p>
                    <button className="btns" onClick={() => removeFromCart(index)} >Remove</button>
                </div>
            </div>)
          })
        }
    </div>
    </>
}
export default Cart;