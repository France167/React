import Lista from "../Lista"

const tienda = {
    electronica: [
      {
        id: 27,
        producto: "Televisor",
        marca: "LG",
        modelo: "XP7302",
        precio: 399,
      },
      {
        id: 28,
        producto: "Equipo Hi-FI",
        marca: "Samsung",
        modelo: "VF235",
        precio: 179,
      },
      {
        id: 29,
        producto: "Televisor",
        marca: "Sony",
        modelo: "Bravia-173",
        precio: 498,
      },
    ],
    alimentacion: [
      { id: 30, producto: "Galletas", marca: "María", precio: 0.9 },
      { id: 31, producto: "Ensalada", marca: "Imizurra", precio: 1.3 },
      { id: 32, producto: "Patatas", marca: "McKain", precio: 0.9 },
      { id: 33, producto: "Pasta", marca: "Gallo", precio: 0.9 },
    ],
    mascotas: [
      { id: 34, producto: "Croquetas para gato", marca: "Purina", precio: 4.9 },
      { id: 35, producto: "Arena de gato", marca: "Limpior", precio: 1.1 },
    ],
  };

  export default function Tienda() {
      return (
          <div>
            <Lista products={tienda.electronica} category="Electronica"/>
            <Lista products={tienda.alimentacion} category="Alimentacion"/>
            <Lista products={tienda.mascotas} category="Mascotas"/>
          </div>
      )
  }