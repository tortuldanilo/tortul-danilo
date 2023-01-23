
document.getElementById('btnUser').addEventListener('click', function() {
   document.getElementById("user_title").innerHTML = "Hola, Mi nombre es"
   document.getElementById("user_value").innerHTML = "Danilo Tortul Cuatrin" 
})

document.getElementById('btnCell').addEventListener('click', function(){
    document.getElementById("user_title").innerHTML = "Comunicate al"
    document.getElementById("user_value").innerHTML = "343 - 154653480"    
})

document.getElementById('btnMail').addEventListener('click', function(){
    document.getElementById("user_title").innerHTML = "Direccion E-mail"
    document.getElementById("user_value").innerHTML = "tortuldanilo@gmail.com"    
})



