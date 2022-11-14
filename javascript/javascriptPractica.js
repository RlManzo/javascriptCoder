function tienda(){ 
iniciar = Number(prompt("                              Bienvenido a Choque Sublimables           " + 
"                     Que producto  queres elegir?  anota el precio                  " +
"                     1_Tazas de ceramica : $800                                              " +
"                     2_Tazas de polimero personalizadas : $400                          " +
"                     3_ Remeras de poliester : $1500                                         " +
"                     4_ Almohadones: $700                       " ));

alert("tu gasto total es $" + iniciar) ;

function continuarComprando(){
continuar =  Number(prompt("Que producto  queres elegir?  anota el precio" +
"                                    1_Tazas de ceramica : $800                                              " +
"                     2_Tazas de polimero personalizadas : $400                          " +
"                     3_ Remeras de poliester : $1500                                         " +
"                     4_ Almohadones: $700                       " ));
 alert("Tu gasto total es $" + (continuar + iniciar)) ;  

}
comprando();
function comprando(){ 
confirmar = confirm("¿Queres seguir comprando? "+"Selecciona aceptar  por si y cancelar por no");
while(confirmar == false){ 
   alert("¡Gracias por tu compra!") 
   break; 
}
if(confirmar == true){   
  
    continuarComprando();
    comprando();
         }
} 
}





    
    



    
 
 
 
