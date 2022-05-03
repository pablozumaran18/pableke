// crear una alerta en el archivo html

alert("hola mundo");
console.log("hola mundo");

// 
let variable = 45;
const constante = 10;
console.log(variable,constante);

// funcion

function funcion(){

   let obj = document.getElementById("edad");

   console.log(obj.value);

    if (obj.value >= 18){
        document.getElementById ("aviso").value="usted es mayor de edad"
    }

    else{
        document.getElementById ("aviso").value="usted es menor de edad"
    }

    let c = [1,2,3]
    let d = [4,5,10]
    let e = [11,12,13]

    let arreglo = [c,d,e,6,5]

    let genero = document.getElementById
    ("sexo")
    console.log(genero.value)

    for(let x = 0; x < arreglo.length; x++){
        console.log(arreglo[x])
    }
}

