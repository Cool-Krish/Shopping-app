

import { createContext, useState} from "react";
import App from "../App";

const ContextApi = createContext()

export default ContextApi


export function CustomProvider(){
    const [cartdata, setCartData] = useState([]);

  
  return (<ContextApi.Provider value={{cartdata, setCartData}}>
       <App/>
  </ContextApi.Provider>)
}