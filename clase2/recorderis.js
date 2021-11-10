/*console.log("Inicia el programa")

setTimeout(()=>{

//va, let , const --> declaran espacio de memoria en javascript

var nombre ="Carlos"
})

function cambiarNombre(nombreACambiar){
    var nombre = nombreACambiar
    console.log(nombre) //nombreEnElScope
    
}
cambiarNombre("pepito")
console.log(nombre)*/


{ //Global scope -> Lo que se habla en casa
    let conversacionHogarena = "El perro se comió el pollo que estaba en la mesa"
    console.log("todos los del hogar pueden ver esta conversacion: " +conversacionHogarena)
    
    function Hijos(){
        let conversacionEntreHijos = "Perdimos 8 materias"
        console.log(conversacionEntreHijos)
        console.log("Los hijos del hogar pueden ver esta conversacion: " + conversacionHogarena)
    }

    function Padres(){
        let conversacion