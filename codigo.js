console.log('hola papurriii');

// Variables

// Declaro una variable llamada nombre
let nombre;
let apellido;
let edad = 56;
let direccion = "Avenida 9 de Julio 1234"
// Asignacion de la variable
nombre = 'Pepa';
apellido = 'Pink';



// Concatenacion de string
console.log('El usario se llama: '+nombre+'Su apellido: '+apellido);

// Operadores aritmeticos
let suma = edad + 10;
let resta = edad - 10;
let multiplicacion = edad * 10;
let division = edad / 2;

console.log(suma, resta, multiplicacion, division);

// Entrada de datos atraves de prompt
let pais = prompt('Ingresa tu pais: ');
console.log('El pais ingresado es: '+pais);

let anio = parseInt(prompt('Ingresa tu año: '));
console.log(anio);
console.log('Su naciemiento es: '+anio);


// Caclcular la edad que tiene
const anioActual = 2025;   //Valor que queda fijo a lo largo de toda la ejecucion
let edadUsuario = anioActual - anio;

alert('Tu tienes '+edadUsuario+'años.')

