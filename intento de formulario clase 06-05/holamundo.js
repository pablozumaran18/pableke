// crear una alerta en el archivo html

alert("Bienvenido Le solicitaremos sus datos personales");
console.log("Bienvenido Le solicitaremos sus datos personales");

// 
let variable = 45;
const constante = 10;
console.log(variable,constante);

var arreglo = []
// funcion

function guardado(){
alert("SE ENVIO TODOS SUS DATOS")

//tra el elemento y lo guarda en la variable elemento segun su id


//nombre (verificarlo)
let elem = document.getElementById("input_name")
let msj = ""
// revisa si el campo vacio o lleno
if (elem.value == ""){

    msj = "debe completar el campo"
}
else {
    msj = "GUARDADO"
} 
document.getElementById("respuesta_nombre").innerHTML=msj


//apellido (verificarlo)
let eleme = document.getElementById("input_apellido")
let msje = ""

if(eleme.value == ""){

    msje = "debe completar el campo"
}
else { 
    msje = "GUARDADO"
}

document.getElementById("respuesta_apellido").innerHTML=msje

//fecha (verificacion)
let elem_fecha = document.getElementById("input_fecha")
let mensaje = ""

if (eleme.value == ""){

    mensaje = "debe completar el campo"
}
else {
    mensaje = "GUARDADO"
} 
document.getElementById("respuesta_fecha").innerHTML=mensaje
 

// direccion (verificacion)

let elem_d = document.getElementById("input_direccion") 
let mensaje_d = ""

if (elem_d.value == ""){

    mensaje_d = "debe completar el campo"
}
else{
    mensaje_d = "GUARDADO"
}
document.getElementById("respuesta_direccion").innerHTML=mensaje_d


// ciudad (verificacion)

let elem_c = document.getElementById("input_ciudad")
let msje_c = ""

if(elem_c.value == ""){

    msje = "debe completar el campo"
}
else { 
    msje = "GUARDADO"
}

document.getElementById("respuesta_ciudad").innerHTML=msje


//genero (verificacion)

let elem_g = document.getElementById("input_genero")
let msje_g = ""

if(elem_g.value == ""){

    msje_g = "debe completar el campo"
}
else { 
    msje_g = "GUARDADO"
}

document.getElementById("respuesta_genero").innerHTML=msje

//correo (verificacion)

let elem_corr = document.getElementById("input_correo")
let msje_corr = ""

if(elem_corr.value == ""){

    msje_corr = "debe completar el campo"
}
else { 
    msje_corr = "GUARDADO"
}

document.getElementById("respuesta_correo").innerHTML=msje

//comentario (verificacion)

let elem_com = document.getElementById("input_correo")
let msje_com = ""

if(elem_com.value == ""){

    msje_com = "debe completar el campo"
}
else { 
    msje_com = "GUARDADO"
}

document.getElementById("respuesta_comentario").innerHTML=msje

//creacion del arreglo

//guardar datos
var obj = new Object()
flag = 0
let elemento_nombre = document.getElementById("input_name")
let elemento_apellido = document.getElementById ("input_apellido")
let elemento_fecha = document.getElementById ("input_fecha")
let elemento_direccion =document.getElementById("input_direccion")
let elemento_ciudad =document.getElementById("input_ciudad")
let elemento_genero =document.getElementById("input_genero")
let elemento_correo =document.getElementById("input_correo")
let elemento_comentario =document.getElementById("input_comentario")

// forma 1

let contacto = new Object()

contacto.nombre = elemento_nombre.value
contacto.apellido = elemento_apellido.value
contacto.fecha = elemento_fecha.value
contacto.direccion = elemento_direccion.value
contacto.ciudad = elemento_ciudad.value
contacto.genero = elemento_genero.value
contacto.correo = elemento_correo.value
contacto.comentario = elemento_comentario.value


if (elemento_nombre.value == ""){
    flag=1
}
if (elemento_apellido.value == ""){
    flag=1
}
if (elemento_fecha.value == ""){
    flag=1
}
if (elemento_direccion.value == ""){
    flag=1
}
if (elemento_ciudad.value == ""){
    flag=1
}
if (elemento_genero.value == ""){
    flag=1
}
if (elemento_correo.value == ""){
    flag=1
}
if (elemento_comentario.value == ""){
    flag=1
}


if (flag == 0) {
    console.log(contacto)

    arreglo.push(contacto)
}else{
    alert ("no paso la validacion")

}



}

function lista(){
    console.log(arreglo)
}
