import axios from "axios";
import { useContext, useEffect, useState } from "react";
import {useParams, NavLink} from "react-router-dom";
import { URL_API_STORE } from "../../constants";
import { UserContext } from "../context/ContextCarrito";

const ProductSection = () => {
    const {id} = useParams(); //1.Se usa el hook useParams para obtener el parametro id de la url
    const [producto, setProducto] = useState({}); //2.Se crea el estado producto que va a contener el producto que se va a mostrar en la pagina
    const [loading, setLoading] = useState(true);
    const { agregarAlCarrito } = useContext(UserContext); //3.Se usa el useContext para obtener la funcion agregarAlCarrito del contexto ContextCarrito

    useEffect(() => {
        //4. Se crea la funcion getProduct para traer los productos de la API como es una funcion asincrona,
        //se usa async y await para que la funcion espere a que se ejecute la peticion a la API
        const getProduct = async () => {
            //5. Se crea la constante response que va a contener la respuesta de la peticion a la API
            //Se agrega el endpoint a la url principal y se le agrega el parametro limit
            const response = await axios.get(
              `${URL_API_STORE}/products/${id}`
            );
            //6. Se actualiza el estado de la variable producto con la respuesta de la API
            setProducto(response.data);
            //9. Se actualiza el estado de la variable loading a false para indicar que ya se termino de cargar los productos
            setLoading(false);
          };
          //7. Se ejecuta la funcion getProduct
          getProduct();
          console.log("Estoy trayendo el producto");
          //Se usa console.log para depurar el codigo y saber si se esta ejecutando el useEffect correctamente
    }, [id]);

  return (
    <section className="py-5">
          <div className="container px-4 px-lg-5 my-5">
            <NavLink to={'/'}>
                <button style={{marginBottom: "1rem"}} className="btn btn-outline-dark flex-shrink-0" type="button">
                    <i className="bi-cart-fill me-1"></i>
                    Back
                </button>
            </NavLink>
      {loading ? (
          <div style={{textAlign: "center"}}>cargando...</div> //Si loading es true se muestra el mensaje de cargando
        ) : (
          <div className="row gx-4 gx-lg-5 align-items-center">
          <div className="col-md-6">
            <img
              className="card-img-top mb-5 mb-md-0"
              src={producto.image}
              alt="..."
            />
          </div>
          <div className="col-md-6">
            <div className="small mb-1">{producto.category}</div>
            <h1 className="display-5 fw-bolder">{producto.title}</h1>
            <div className="fs-5 mb-5">
              <span>${producto.price}</span>
            </div>
            <p className="lead">
              {producto.description}
            </p>
            <form className="d-flex">
              <input
                className="form-control text-center me-3"
                id="inputQuantity"
                type="number"
                value="1"
                style={{ maxWidth: "3rem" }}
              />
              <button onClick={() => {
                agregarAlCarrito(producto) //Se llama a la funcion agregarAlCarrito que esta en el componente principal
            }} className="btn btn-outline-dark flex-shrink-0" type="button">
                <i className="bi-cart-fill me-1"></i>
                Agregar al carro
              </button>
            </form>
          </div>
        </div>
        )
      }
          </div>
    </section>
  );
};

export default ProductSection;
