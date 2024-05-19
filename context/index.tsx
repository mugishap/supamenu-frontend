import { getData } from "@/utils/storage";
import { router } from "expo-router";
import React, { createContext, useContext, useEffect, useState } from "react";

const GlobalContext = createContext({});
export const useGlobalContext = () => useContext<any>(GlobalContext);

const GlobalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState([]);
  const [liked, setLiked] = useState([]);

  useEffect(() => {
    getData("token").then((token) => {
      console.log(token);
      if (token) {
        setIsLogged(true);
      } else {
        setIsLogged(false);
      }
    })
  }, []);

  useEffect(() => {
    // if (!isLogged) {
    //   router.push("/login")
    // }
  }, [isLogged])

  return (
    <GlobalContext.Provider
      value={{
        isLogged,
        setIsLogged,
        user,
        setUser,
        loading,
        cart,
        setCart,
        liked,
        setLiked
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
