"use client";
import { logout } from "@/service/auth/action";
import Cookies from "js-cookie";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
type UserContextType = {
  isLogin: boolean;
  userLogout:()=>void
  userLogin:()=>void
};

const userContext = createContext<UserContextType | null>(null);

export default function UserProvider({ children }: { children: ReactNode }) {
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const userLogout=()=>{
    logout()
    setIsLogin(false)
  }
  const userLogin=()=>{
    setIsLogin(true)
  }
  
  useEffect(() => {
    
    const logged_in = Cookies.get("logged_in");
    console.log("Session from cookie:", logged_in);
    
    setIsLogin(logged_in=="true"?true:false)
    
  }, []);
  
  return (
    <userContext.Provider value={{ userLogin, userLogout,isLogin }}>
      {children}
    </userContext.Provider>
  );
}
export const useUserContext = (): UserContextType => {
  const context = useContext(userContext);
  if (context === null) {
    throw new Error("useUserContext must be used within a userProvider");
  }
  return context;
};
