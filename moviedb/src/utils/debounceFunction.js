export default function debounceFunction(func, delay) {
  let timer;

  return function () {
    //Elemento this, por si lo necesitara la function que vamos a ejecutar.
    const self = this;

    //Es un objeto magico porque no aparece declarado como tal,
    //que tiene los argumentos con los que se llamo a esta function.
    //En vez de nombrarlo todos, que no lo sabemos, lo que hacemos es nombrar
    //a este objeto que los contiene todos.
    const args = arguments;

    clearTimeout(timer);

    timer = setTimeout(function () {
      func.apply(self, args); // invocamos el metodo apply, que lo que permite es bindear la variable this,
      // pasandole la variable self que contiene el this de la function que fue invocada
      // para preservar ese valor y tambien los argumentos de esta function,
      // que es la version debounceada de la anteriorn, con los que se ejecutò.
    }, delay);
  };
}
