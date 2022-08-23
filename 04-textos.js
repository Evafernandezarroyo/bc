const nombre = "Maria";
const apellido = "cruz";
const estudiante =` ${nombre}  ${apellido}`;
// const estudiante = ( nombre.concat("" , apellido));
// const estudiante = (nombre + " " + apellido);
const estudiante_minusculas = estudiante.toLowerCase();// convierte minusculas
const estudiante_mayusculas = estudiante_minusculas.toUpperCase();// convierte en mayusculas
const num_letras_cadena = estudiante.length;
const primera_letra = nombre[0];
// const primera_letra = (nombre.charAt[0]) obtener primer caracter de la cadena
//const ultimo_catacter = apellido.length -1; devuelve la posicion en numero
const ultimo_catacter = apellido.substring(apellido.length -1);// ultimo caracter
/*const estudiante_sin_espacios = estudiante.trim().length;
elimina espacios, pre saca por pantalla numero de caracteres*/
const estudiante_sin_espacios = estudiante.replace(/ /g , "");//cadena sin espacios / /g remplazatodo
const include_variable_nombre = estudiante.includes(nombre);
console.log(estudiante);
console.log(estudiante_minusculas);
console.log(estudiante_mayusculas);
console.log(primera_letra);
console.log(ultimo_catacter);
console.log(estudiante_sin_espacios);
console.log(include_variable_nombre);