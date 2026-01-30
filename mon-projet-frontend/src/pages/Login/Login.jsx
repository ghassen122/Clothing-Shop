import './Login.css'
import React, { useState ,useContext} from 'react'
import headerimage from  '../../assets/header-image.png'
import { ClothesContext } from '../../context/context';
import axios from 'axios';
import { toast } from 'react-toastify'
export const Login = () => {
    const [currState,setCurrState]=useState("Sign Up");
     const {setToken, url} = useContext(ClothesContext);
     const [data, setData] = useState({
        name: "",
        email: "",
        password: ""
    })

    const onChangeHandler = (event) => {
        const name = event.target.name
        const value = event.target.value
        setData(data => ({ ...data, [name]: value }))
    }

      const onLogin = async (e) => {
        e.preventDefault()
         console.log("URL from context:", url);
        let new_url = url;
        if (currState === "Login") {
            new_url += "/api/user/login";
        }
        else {
            new_url += "/api/user/register"
        }


       const response = await axios.post(new_url, data);
        if (response.data.success) {
          toast.success(response.data.message)
            setToken(response.data.token)
            localStorage.setItem("token", response.data.token)
            // important for review loadCartData({token:response.data.token})
            // review setShowLogin(false)
        }
        else {
            toast.error(response.data.message)
        }
    }
  return (
    <div className='Login'>
         <form   onSubmit={onLogin}  className='Login-Container'>
            <div className="Login-title">
                <h3>{currState}</h3>
            </div>
            <div className="Login-inputs">
                {currState==="Sign Up"?<input name='name'  onChange={onChangeHandler}  value={data.name} placeholder='name'  type="text"  required/> :<></>}
                <input  name='email' onChange={onChangeHandler} value={data.email} placeholder='email' type="email"  required/>
                  <input name='password' onChange={onChangeHandler} value={data.password} type="password" placeholder='Password' required />
            </div>
            <button >{currState==="Login"?"Login":"create account"}</button>
             <div className="login-condition">
                    <input type="checkbox" name="" id="" />
                    <p>By continuing, i agree to the terms of use & privacy policy.</p>
                </div>
                 {currState === "Login"
                    ? <p>Create a new account? <span onClick={() => setCurrState('Sign Up')}>Click here</span></p>
                    : <p>Already have an account? <span onClick={() => setCurrState('Login')}>Login here</span></p>
                }
         </form>
         
    </div>
  )
}
