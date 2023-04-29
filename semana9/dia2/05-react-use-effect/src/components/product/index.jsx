import PropTypes from "prop-types";
import "./styles.css";
import { NavLink } from "react-router-dom";

const Product = (props) => {
  const { item, agregarAlCarrito } = props;

  return (
    <div className="card">
      <img src={item.image} className="card-img-top product-image" />
      <div className="card-body">
        <h5 className="card-title product-title" title={item.title}>
          {item.title}
        </h5>
        <p className="card-text product-description" title={item.description}>
          {item.description}
        </p>
        <NavLink to={`/product/${item.id}`}>
          <button className="btn btn-sm btn-primary">Ver producto</button>
        </NavLink>

        <button
          className="btn btn-sm btn-warning"
          onClick={() => {
            agregarAlCarrito(item);
          }}
        >
          agregar
        </button>
      </div>
    </div>
  );
};

Product.propTypes = {
  item: PropTypes.object.isRequired,
  agregarAlCarrito: PropTypes.func.isRequired,
};

export default Product;
