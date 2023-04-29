import React from "react";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams, NavLink } from "react-router-dom";
import { URL_API_STORE } from "../../constants";
import { UserContext } from "../context/ContextCarrito";

const productSection = () => {
  const [id] = useParams(); //se usa para obtner el parametro de la url
  const [producto, setProducto] = useState({});
  const [loading, setLoading] = useState(true);
  const { agregarAlCarrito } = useContext(UserContext);

  useEffect(() => {
    const getProduct = async () => {
      const response = await axios.get(`${URL_API_STORE}/products/${id}`);
      //se actualiza el estadi de la variable con la respuesta del api
      setProducto(response.data);
      //se actualiza el estado loading a flase para indicar que ya se termino de cargar los productos
      setLoading(false);
    };
    //se invoca A la funcion
    getProduct();
  }, [id]);

  return (
    <section className="py-5">
      <div className="container px-4 px-lg-5 my-5">
        <NavLink to={"/"}>
          <button>back</button>
        </NavLink>
        {loading ? (
          <div>cargando...</div> //si loading es true se muuestra el menmsaje de cargando
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
              <h1>{producto.title}</h1>
              <div className="fs-5 mb-5">
                <span>${producto.price}</span>
              </div>
              <p className="lead">
                {producto.description}
              </p>
              <form action="">
                <input type="number" className="form-control text-center me-3" id="inputQuantity" value="1" style={{maxWidth:"3rem"}}  />
                <button onClick={()=>{agregarAlCarrito(producto)}}>Agregar al carro</button>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default productSection;
