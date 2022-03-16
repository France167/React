import propTypes from "prop-types"

export default function Lista({ products, category }) {
  return (
    <div>
      <h2>{category}</h2>
      {products.map(({ id, producto, marca, modelo, precio }) =>
        modelo ? (
          <p key={id}>
            {producto} - {marca} - {modelo} - {precio}€
          </p>
        ) : (
          <p key={id}>
            {producto} - {marca} - {precio}€
          </p>
        )
      )}
    </div>
  );
}

// Valor por difecto
Lista.defautProps = {
    products: [],
    category: "No category"
};

//Tipo de datos
Lista.propTypes = {
    products: propTypes.array.isRequired,
    category: propTypes.string
}