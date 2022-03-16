import propTypes from "prop-types";

export default function Lista({ productos, categoria }) {
  return (
    <div>
      <h3>{categoria}</h3>
      {productos.map(({ id, producto, marca, modelo, precio }) =>
        modelo ? (
          <p key={id}>
            {producto} - {marca} - {modelo} - {precio}
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

// Valores por defecto
Lista.defaultProps = {
  productos: [],
  categoria: "Sin categoria",
};

// Tipo de datos
Lista.propTypes = {
  productos: propTypes.array.isRequired,
  categoria: propTypes.string,
};
