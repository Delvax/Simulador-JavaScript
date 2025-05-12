/*
##########################################################
#                    ALTA DE CLIENTE                     #
##########################################################
*/

// 1. Declaración de variables, constantes y arrays

let = "NombreCliente";
let = "CorreoDelCliente";
let = "EmpresaDelCliente";



alert('Bienvenido al VIP Manager un simulador de alta de clientes');
alert('Vamos a darte de alta, te pediremos solo 3 datos.');

let NombreCliente = prompt('Ingresa tu nombre y apellido:');
let CorreoDelCliente = prompt('Tu correo:')
let EmpresaDelCliente = prompt('Ingresa el nombre de tu empresa: ');


console.log('Bienvenido: '+NombreCliente+'\n'+'Te has registrado con el siguiente correo: '+CorreoDelCliente+ `\nRevisa tu casilla de correo para dar de alta la empresa: ${EmpresaDelCliente}`);

