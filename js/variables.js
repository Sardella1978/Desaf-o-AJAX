let carrito = [];
const divisa = '$';
const DOMitems = document.querySelector('#items');
const DOMcarrito = document.querySelector('#carrito');
const DOMtotal = document.querySelector('#total');
const DOMbotonVaciar = document.querySelector('#boton-vaciar');
const DOMbotonConfirmar = document.querySelector('#enviar-pedido');
const inputFiltrar = document.querySelector("#filtrar")
const tbody = document.querySelector("tbody")

let baseDeDatos = ""
const URL = "contactos.json"


