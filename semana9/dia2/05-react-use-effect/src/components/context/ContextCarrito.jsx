import { createContext } from "react";
import useCarrito from "../hooks/useCarrito";
export const UserContext = createContext();


//se creaun contexto para poder usar las fguncionews y variable del custom hooks useCarrito en todos los 
//componentes que esten dentro del componente contextCarrito


const ContextCarrito=({children})=>{
    //se destructura el custom hook para obtner las funciones y variables 
    const{agregarAlCarrito,carrito,eliminarDelCarrito}=useCarrito();

    return(
        //sde crea un contexto y uuuun userContext que va conter las funcion que se vanm usar
        
        <UserContext.Provider value={{agregarAlCarrito,carrito,eliminarDelCarrito}} > 
             {children}
        </UserContext.Provider>
    )
}