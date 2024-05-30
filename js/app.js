console.log(Vue);

const estudiantes = [{ nombre: "Edison", apellido: "Cayambe" },
{ nombre: "Daniel", apellido: "Mora" },
{ nombre: "Carlos", apellido: "Teran" },
{ nombre: "Romeo", apellido: "Castillo" },
{ nombre: "Andrea", apellido: "Paez" },
];

const app = Vue.createApp({
    /*template: `
    <h1>Hola mundo desde Vue.JS</h1> 
    <p>
    {{1+1}}</p>
    <p>{{[1,2,3,4,5]}}</p>
    <p>{{false?'True':'False'}}</p>
    `*/
    data() {
        return {
            //puedo declarar cualquier tipo de dato, los debo separa por comas
            mensaje: "Hola mundo propiedad reactiva",
            valor: 7,
            lista: estudiantes
        }
    },
    //Destinado para los métodos
    //Cuando quiera creear una funcionalidad debe estar en los methods
    methods: {
        cambiarTexto() {
            //Toda propiedad reactiva que se usa dentro de codificacion js debe tener la palabra reservada this en especial archivos js
            this.mensaje = "Texto cambiado"

        },
        sumar() {
            this.valor = this.valor + 100;
        },
        agregar(){
            const nuevo={
                nombre:"Dillan",
                apellido:"Coloma"
            }
            this.lista.unshift(nuevo);
        }


    }
});

app.mount('#myApp'); //configuro mi aplicación