// Defición del objeto curso
class Curso {
    constructor(nombre, duracion) {
      this.nombre = nombre;
      this.duracion = duracion;
    }
  }
  
  // Definición de objeto Leccion
  class Leccion {
    constructor(nombre, duracion) {
      this.nombre = nombre;
      this.duracion = duracion;
    }
  }
  
  // Función que crea un curso
  function crearCurso() {
    let nombreCurso = prompt("Ingrese el nombre del curso:");
    let duracionCurso = prompt("Ingrese la duración del curso en semanas:");
    return new Curso(nombreCurso, duracionCurso);
  }
  
  // Función que crea una lección
  function crearLeccion() {
    let nombreLeccion = prompt("Ingrese el nombre de la lección:");
    let duracionLeccion = prompt("Ingrese la duración de la lección en minutos:");
    return new Leccion(nombreLeccion, duracionLeccion);
  }
  
  // Función que calcula la duración del curso
  function calcularDuracionTotal(curso) {
    let duracionTotal = curso.duracion * 7 * 24 * 60; // Semana en minutos
    return duracionTotal;
  }
  
  // Función que calcula el progreso
  function calcularProgreso(curso, leccionesCompletadas) {
    let duracionTotal = calcularDuracionTotal(curso);
    let duracionLeccionesCompletadas = 0;
    for (let i = 0; i < leccionesCompletadas.length; i++) {
      duracionLeccionesCompletadas += leccionesCompletadas[i].duracion;
    }
    let porcentajeProgreso = (duracionLeccionesCompletadas / duracionTotal) * 100;
    return porcentajeProgreso.toFixed(2);
  }
  
  // Función para simular el proceso de e-learning
  function simularElearning() {
    let nombre = document.getElementById("nombre").value;
    let curso = document.getElementById("curso").value;
  
    // Crea Curso
    let cursoObjeto = crearCurso();
  
    // Crea lecciones
    let leccion1 = crearLeccion();
    let leccion2 = crearLeccion();
    let leccion3 = crearLeccion();
  
    // Completar algunas lecciones
    let leccionesCompletadas = [leccion1, leccion3];
  
    // Calcular el progreso del curso
    let progreso = calcularProgreso(cursoObjeto, leccionesCompletadas);
  
    // Salida re resultados
    let resultado = document.getElementById("resultado");
    if (isNaN(progreso)) {
      resultado.innerHTML = `<p>Nombre: ${nombre}</p>
                              <p>Curso: ${curso}</p>
                              <p>No se ha completado ninguna lección</p>`;
    } else {
      resultado.innerHTML = `<p>Nombre: ${nombre}</p>
                              <p>Curso: ${curso}</p>
                              <p>Progreso: ${progreso}%</p>`;
    }
  }

  