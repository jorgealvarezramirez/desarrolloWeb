// let personas = [];

// function registrar_persona() {
//   //Obtener los datos de los campos de texto del formulario
//   let nombre = document.getElementById("nombre").value;
//   let apellido = document.getElementById("apellido").value;
//   let email = document.getElementById("email").value;
//   let telefono = document.getElementById("telefono").value;

//   // Construir un objeto de los valores optenidos de la función
//   let objPersona = {
//     nombre : nombre, // Una forma de contruir el objeto
//     apellido, // Otra forma de contruir el objeto, (son iguales nombre variable)
//     email,
//     telefono,
//   };
//   personas.push(objPersona); // Almacena los registros en el array
//   console.log("Persona Registrada: ", personas); // Pinta el array generado
// }

let personas = [];

const registrar_persona = () => {
  //Obtener los datos de los campos de texto del formulario
  let nombre = document.getElementById("nombre").value;
  let apellido = document.getElementById("apellido").value;
  let email = document.getElementById("email").value;
  let telefono = document.getElementById("telefono").value;

  // Construir un objeto de los valores optenidos de la función
  let objPersona = {
    nombre: nombre, // Una forma de contruir el objeto
    apellido, // Otra forma de contruir el objeto, (son iguales nombre variable)
    email,
    telefono,
  };
  personas.push(objPersona); // Almacena los registros en el array
  console.log("Persona Registrada: ", personas); // Pinta el array generado
  listarPersonas();
  btnEditar();
  btnActualizar();
  limpiarFormulario();
};

/* Ejercicio: Listar los objetos del array 'personas' 
en la tabla (html)
*/

const listarPersonas = () => {
  // console.log("Listar personas");
  let cuerpoTabla = document.getElementById("cuerpoTabla"); // Referenciar cuerpo de la tabla
  cuerpoTabla.innerHTML = "";
  personas.forEach((objPersona) => {
    // Iteramos el array (usuarios almacenados en el arreglo)
    cuerpoTabla.innerHTML += `
    <tr>
      <td>${objPersona.nombre}</td>
      <td>${objPersona.apellido}</td>
      <td>${objPersona.email}</td>
      <td>${objPersona.telefono}</td>
      <td><button onclick="btnEditar ('${objPersona.nombre}', '${objPersona.apellido}', '${objPersona.email}', '${objPersona.telefono}')"  >Editar</button> <button onclick="eliminarPersona('${objPersona.email}')">Eliminar</button></td>
    </tr>
    `;
  });
};

const eliminarPersona = (email) => {
  let personasTempo = personas.filter(
    (objPersona) => objPersona.email != email
  );
  personas = personasTempo;
  listarPersonas();
};

const limpiarFormulario = () => {
  document.getElementById("nombre").value = "";
  document.getElementById("apellido").value = "";
  document.getElementById("email").value = "";
  document.getElementById("telefono").value = "";
};

const btnEditar = (nombre, apellido, email, telefono) => {
  document.getElementById("nombre").value = nombre;
  document.getElementById("apellido").value = apellido;
  document.getElementById("email").value = email;
  document.getElementById("telefono").value = telefono;
};

const btnActualizar = () => {
  let objPersona = obtenerDatos();
  personas.map((element) => {
    if (element.email == objPersona.email) {
      element.nombre = objPersona.nombre;
      element.apellido = objPersona.apellido;
      element.telefono = objPersona.telefono;
    }
  });
  listarPersonas();
  limpiarFormulario();
};

const obtenerDatos = () => {
  //Obtener datos de los campos de texto
  let nombre = document.getElementById("nombre").value;
  let apellido = document.getElementById("apellido").value;
  let email = document.getElementById("email").value;
  let telefono = document.getElementById("telefono").value;

  return {
    nombre,
    apellido,
    email,
    telefono,
  };
};
