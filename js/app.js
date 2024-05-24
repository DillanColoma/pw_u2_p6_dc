console.log(Vue);

 
const app = Vue.createApp({
    template: `
    <h1>Hola mundo desde Vue.JS</h1> 
    <p>
    {{1+1}}</p>
    <p>{{[1,2,3,4,5]}}</p>
    <p>{{false?'True':'False'}}</p>
    `
   
});

app.mount('#myApp'); //configuro mi aplicación