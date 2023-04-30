import { createContext, useEffect, useReducer } from "react";
import AuthReducer from "./AuthReducer"

const INITIAL_STATE = {
//       user:{
//     _id : "639eff5e4df36a101f672e77",
// username: "parth",
// email : "parth@gmail.com",
// password : "$2b$10$jUmeFCy3Z1nkb4Porkwtx.cOA6aIqUxfu6pmFjlyxAQ.cbqerErPC",
// profilePicture:"",
// coverPicture:"",
// followers:["639dfa5a96db908792b7ff7e","639f3c3af942978aa37ae925"],
// followings:["639dfa5a96db908792b7ff7e"],
// isAdmin : "false",
//     }, 
    user:JSON.parse(localStorage.getItem("user")) || null,
    // user:JSON.parse(localStorage.getItem("user")) || null ,
    // user:localStorage.getItem("user"),
    // user:null,
    isFetching:false,
    error:false
};

export const AuthContext = createContext(INITIAL_STATE);



export const AuthContextProvider = ({children}) =>{
    const [state,dispatch] = useReducer(AuthReducer,INITIAL_STATE);

    useEffect(()=>{
        localStorage.setItem("user", JSON.stringify(state.user))
      },[state.user])

    return(
        <AuthContext.Provider 
        value={{
            user: state.user,
            isFetching: state.isFetching,
            error: state.error,
            dispatch,
            }}
            >
          {children}
        </AuthContext.Provider>
    )
}


