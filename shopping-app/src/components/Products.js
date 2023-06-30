import { useState, useEffect, useContext } from "react";
import './style.css'
import ContextApi from "./CotextAPI";

function Products() {
    const {cartdata,setCartData} = useContext(ContextApi)
    const [productdata, setData] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((data) => {
                // console.log(data)
                setData(data)
            })
    })

    return <>
    <div className="container">
        {productdata &&
          productdata.map((ele)=>{
            return <>
            <div className="card">
                <div className="imgs">
                    <img src={ele.image} alt="" />
                </div>
                <div className="productInfo">
                    <h3>{ele.title.slice(0,36)}</h3>
                    <p>Price : $ {ele.price}</p>
                    <p>Category : {ele.category}</p>
                    <button className="btn" onClick={(()=>{
                        setCartData([...cartdata, ele])
                        alert("Product Added to cart")

                    })} >Add Cart</button>
                </div>
            </div>
            </>
          })
        
        }
    </div>

    </>
}

export default Products;