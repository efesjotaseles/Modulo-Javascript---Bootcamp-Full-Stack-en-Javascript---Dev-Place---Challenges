//OJO, puede repetirse....
function generarID() {
  return Math.round(Math.random() * 1000000);
}

/* ******* CLASES ******* */

//PERSONA
class Persona {
  //Atributos
  nombre;
  apellido;
  id;
  estadoCivil;

  //Constructor
  constructor(nombre, apellido, estadoCivil) {
    this.nombre = nombre.toLowerCase();
    this.apellido = apellido.toLowerCase();
    this.estadoCivil = estadoCivil.toLowerCase();
    this.id = generarID();
  }

  //Métodos
  cambiarEstadoCivil(estadoCivil) {
    this.estadoCivil = estadoCivil;
  }

  toString() {
    return (
      "{'id': '" +
      `${this.id}` +
      "', 'nombre': '" +
      `${this.nombre}` +
      "', 'apellido': '" +
      `${this.apellido}` +
      "', 'estadoCivil': '" +
      `${this.estadoCivil}` +
      "'}"
    );
  }

  mostrar() {
    return `ID: ${this.id} | Nombre: ${this.nombre} | Apellido: ${this.apellido} | Estado civil: ${this.estadoCivil}`;
  }
}

//EMPLEADO
class Empleado extends Persona {
  //Atributos
  anioIncorporacion;
  numDespacho;

  //Constructor
  /**
   *
   * @param {*} nombre
   * @param {*} apellido
   * @param {*} estadoCivil
   * @param {*} anioIncorporacion 0: año corriente
   * @param {*} numDespacho
   */
  constructor(nombre, apellido, estadoCivil, anioIncorporacion, numDespacho) {
    super(nombre, apellido, estadoCivil);
    anioIncorporacion = parseInt(anioIncorporacion);
    if (anioIncorporacion === 0) {
      //TODO año corriente
      this.anioIncorporacion = 0;
    } else {
      this.anioIncorporacion = anioIncorporacion;
    }
    this.numDespacho = parseInt(numDespacho);
  }

  //Métodos

  reasignarDespacho(numDespacho) {
    this.numDespacho = parseInt(numDespacho);
  }

  toString() {
    return (
      "{'id': '" +
      `${this.id}` +
      "', 'nombre': '" +
      `${this.nombre}` +
      "', 'apellido': '" +
      `${this.apellido}` +
      "', 'estadoCivil': '" +
      `${this.estadoCivil}` +
      "', 'anioIncorporacion': '" +
      `${this.anioIncorporacion}` +
      "', 'numDespacho': '" +
      `${this.numDespacho}` +
      "'}"
    );
  }

  mostrar() {
    return `ID: ${this.id} | Nombre: ${this.nombre} | Apellido: ${this.apellido} | Estado civil: ${this.estadoCivil} | Año de Incorporación: ${this.anioIncorporacion} | Num de despacho: ${this.numDespacho}`;
  }
}

//ESTUDIANTE
class Estudiante extends Persona {
  //Atributos
  curso;

  //Constructor
  constructor(nombre, apellido, estadoCivil, curso) {
    super(nombre, apellido, estadoCivil);
    this.curso = curso;
  }

  //Métodos
  matricularEnOtroCurso(curso) {
    this.curso = curso;
  }

  toString() {
    return (
      "{'id': '" +
      `${this.id}` +
      "', 'nombre': '" +
      `${this.nombre}` +
      "', 'apellido': '" +
      `${this.apellido}` +
      "', 'estadoCivil': '" +
      `${this.estadoCivil}` +
      "', 'curso': '" +
      `${this.curso}` +
      "'}"
    );
  }

  mostrar() {
    return `ID: ${this.id} | Nombre: ${this.nombre} | Apellido: ${this.apellido} | Estado civil: ${this.estadoCivil} | Curso: ${this.curso}`;
  }
}

//Profesor
class Profesor extends Empleado {
  //Atributos
  departamento;

  //Constructor
  constructor(
    nombre,
    apellido,
    estadoCivil,
    anioIncorporacion,
    numDespacho,
    departamento
  ) {
    super(nombre, apellido, estadoCivil, anioIncorporacion, numDespacho);
    this.departamento = departamento;
  }

  //Métodos
  cambiarDepartamento(departamento) {
    this.departamento = departamento;
  }
}

//Personal de servicio
class PersonalServicio extends Empleado {
  //Atributos
  seccion;

  //Constructor
  constructor(
    nombre,
    apellido,
    estadoCivil,
    anioIncorporacion,
    numDespacho,
    seccion
  ) {
    super(nombre, apellido, estadoCivil, anioIncorporacion, numDespacho);
    this.seccion = seccion;
  }

  //Métodos
  trasladoASeccion(seccion) {
    this.seccion = seccion;
  }

  toString() {
    return (
      "{'id': '" +
      `${this.id}` +
      "', 'nombre': '" +
      `${this.nombre}` +
      "', 'apellido': '" +
      `${this.apellido}` +
      "', 'estadoCivil': '" +
      `${this.estadoCivil}` +
      "', 'anioIncorporacion': '" +
      `${this.anioIncorporacion}` +
      "', 'numDespacho': '" +
      `${this.numDespacho}` +
      "', 'seccion': '" +
      `${this.seccion}` +
      "'}"
    );
  }

  mostrar() {
    return `ID: ${this.id} | Nombre: ${this.nombre} | Apellido: ${this.apellido} | Estado civil: ${this.estadoCivil} | Año de Incorporación: ${this.anioIncorporacion} | Num de despacho: ${this.numDespacho} | Sección: ${this.seccion}`;
  }
}
