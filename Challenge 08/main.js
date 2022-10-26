class NIF {
  //ATRIBUTOS
  dni = 0n;
  letra = " ";

  //CONSTRUCTOR
  /*
  constructor () {
    this.dni = 0n;
    this.letra = " ";
  }
*/

  constructor(dni) {
    this.dni = dni;
    this.letra = this.#calcularLetra();
  }

  //MÉTODOS

  leer() {
    return this.dni + "-" + this.#calcularLetra();
  }

  /*
  mostrarNIF() {
    return this.dni + "-" + this.#calcularLetra();
  }
  */

  #calcularLetra() {
    const letras = [
      "T",
      "R",
      "W",
      "A",
      "G",
      "M",
      "Y",
      "Y",
      "Y",
      "D",
      "X",
      "B",
      "N",
      "J",
      "Z",
      "S",
      "Q",
      "V",
      "H",
      "L",
      "C",
      "K",
      "E",
    ];

    return letras[this.dni % 23];
  }
}
