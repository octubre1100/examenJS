//el usuario ingresa el sueldo
function salarioMensual (x) {
    let salarioAnual = prompt ("ingrese su sueldo anual")
    salarioAnual = salarioAnual / 12
    console.log ("su sueldo mensual es " + salarioAnual )
    return salarioAnual
}
//el usuario ingresa el sueldo
function salarioAnual (x) {
    let salarioMensual = prompt ("ingrese su sueldo mensual")
    salarioMensual = salarioMensual * 12
    console.log ("su sueldo anual es " + salarioMensual )
    return salarioMensual
}
function promedio (x) {
    let Nota1 = prompt ("ingrese su primer nota")
    let Nota2 = prompt ("ingrese su segunda nota")
    let Nota3 = prompt ("ingrese su tercer nota")
    let resultado = (parseFloat(Nota1) + parseFloat(Nota2) + parseFloat(Nota3)) / 3
    alert ("Su promedio es " + resultado)
    return resultado
}
