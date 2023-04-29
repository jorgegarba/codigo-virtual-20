import { useState } from "react";

const useCarrito = () => {
  const [carrito, setCarrito] = useState(
    //1. fvalida si hay alñgun producto ennel carrito de lo contrarrio establece el vcalor de carrito en un array vacio
    JSON.parse(localStorage.getItem("carrito")) || []
  );

  const agregarAlCarrito = (item) => {
    //se destrusctura la variable carrito para obtenmer sus valores
    const copiaCarrito = [...carrito];
    const itemEncontrado = copiaCarrito.find((prod) => prod.id == item.id);

    if (itemEncontrado) {
        //si el objeto existia DENTRO DEL CARRITO SE LE SUMA 1 A LA CANTIDAD TOTAL
      itemEncontrado.cant += 1;
      setCarrito(copiaCarrito);//SE USA SETCARRITO PARA ACTUALIZAR EL ESTADO
    } else {
      //si el item no existia , se agreega al carrito
      const nuevoItemAlCarrito = { ...item }; //se usa el operador para sacar una copia
      nuevoItemAlCarrito.cant = 1; //se le agrega a la propiedad cant el objeto nuevoitecarrito el valor de 1
      copiaCarrito.push(nuevoItemAlCarrito); //se agrega el objeto nuevoitemcarrito al array copia carrito usando push
      setCarrito(copiaCarrito);
    }
  };
//esta funcion eliminara el item
  const eliminarDelCarrito=(id)=>{

    const copiaCarrito=[...carrito]; 
    const nuevosProductos = copiaCarrito.filter((prod)=>prod.id !== id)
    setCarrito(nuevosProductos)//actualizar la lista del carrito
  }

  return{
    agregarAlCarrito,
    carrito,
    eliminarDelCarrito,
  }
};

export default useCarrito;