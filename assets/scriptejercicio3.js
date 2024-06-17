document.addEventListener("DOMContentLoaded", function () {
    let valorUno = document.getElementById("valor1");
    let valorDos = document.getElementById("valor2");
    const botones = document.querySelectorAll("button");
    botones.forEach(function (button) {
        button.addEventListener("click", function (event) {
          if(button.id=="btn-sumar"){
            let suma =parseInt(valorUno.value)+parseInt(valorDos.value);
            if (suma<0){
                let resultado = document.querySelector(".resultado");
                resultado.textContent = '0';
            }else{
                let resultado = document.querySelector(".resultado");
                resultado.textContent = suma;
            }

            
            
          }

          if(button.id=="btn-restar"){
            let resta =parseInt(valorUno.value)-parseInt(valorDos.value);
            if (resta<0){
                let resultado = document.querySelector(".resultado");
                resultado.textContent = '0';
            }else{
                let resultado = document.querySelector(".resultado");
                resultado.textContent = resta;
            }

            
            
          }
        });
      });





});
