import { createContext,useState,useEffect } from "react";
import axios from "axios";
//import { clothesList } from "../assets/assets";
export const ClothesContext=createContext(null);
const ClothesContextProvider =(props) =>{

   const url = "http://localhost:4000";
   const [token, setToken] = useState("");
   const [Clothes_list, setClothesList] = useState([]);
   const [cartItems, setCartItems] = useState({});
   const currency = "$";
     const addToCart = async (itemId) => {
        if (!cartItems?.[itemId]) {
            setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
        }
        else {
            setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
        }
       if (token) {
            await axios.post(url + "/api/cart/add", { itemId }, { headers: { token } });
        }
    }
       
    const removeFromCart = async (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
          if (token) {
            await axios.post(url + "/api/cart/remove", { itemId }, { headers: { token } });
        }
       
    }
      const fetchClothesList = async () => {
        const response = await axios.get(url + "/api/clothe/list");
        console.log("API Clothes LIST → ", response.data);
        setClothesList(response.data.data)
    }
      const getCountCartItems = () => {
        let totalCount = 0;
        for (const item in cartItems) {
            try {
              if (cartItems[item] > 0) {
               // let itemInfo = Clothes_list.find((product) => product._id === item);
                totalCount += cartItems[item];
            }  
            } catch (error) {
                
            }
            
        }
        return totalCount;
    }
    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            try {
              if (cartItems[item] > 0) {
                let itemInfo = Clothes_list.find((product) => product._id === item);
                totalAmount += itemInfo.price * cartItems[item];
            }  
            } catch (error) {
                
            }
            
        }
        return totalAmount;
    }
        const loadCartData = async (token) => {
        const response = await axios.post(url + "/api/cart/get", {}, { headers: {token} });
        setCartItems(response.data.cartData);
    }

    useEffect(() => {
        async function loadData() {
            await fetchClothesList();
            const savedToken = localStorage.getItem("token");
            if (savedToken){
                setToken(savedToken);
               await loadCartData(savedToken);
            }
        }
        loadData()
    }, [])


 const contextValue ={
    Clothes_list,
    cartItems,
    setCartItems,
    addToCart,
   removeFromCart,
   getTotalCartAmount,
   getCountCartItems,
    url,
    currency,
    token,
    setToken
 }
 return (
    <ClothesContext.Provider value={contextValue}>{props.children}</ClothesContext.Provider>
 )
}
export default ClothesContextProvider;