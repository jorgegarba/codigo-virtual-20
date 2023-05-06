import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProviderLogin = ({ children }) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  const storeUser = () => {
    localStorage.setItem("user", JSON.stringify(dataUser));
    setUser(dataUser);
  };

  return(
    <UserProviderLogin value={{user,storeUser}}>
        {children}
    </UserProviderLogin>
  )

};
