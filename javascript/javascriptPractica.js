function tienda(){ 
let iniciar = Number(prompt("                              Bienvenido a Choque Sublimables           " + 
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
 alert("Tu gasto total es $" + (iniciar + continuar)) ; 

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
 
class Producto {
   constructor(nombre, linea, precio, talles){
      this.nombre = nombre;
      this.linea = linea;
      this.precio = precio;
      this.talles = talles;
      }
}
let arrayProductos = [];
arrayProductos.push(iniciar);
arrayProductos.push(continuar);
let remeraLisa = new Producto("remera Blanca Lisa", "poliester", 1500,"S, M, L, XL" );
let remeraDignidad = new Producto("Remera  Blanca","poliester",1500, "S, M, L, XL"); 
let remeraHomero = new Producto("Remera Blanca Homero", "poliester",1500, "S, M, L, XL");
let almohadonDulzura = new Producto("Almohadon  50x40cm estampado","Almohadones", 1100);
let almohadonDulzura2 = new Producto("Almohadon  50x40cm estampado","Almohadones", 1100);
let mateListo = new Producto("Mate listo Dia del Maestro", "polimero", 800);
let  tazaSignos = new Producto("Taza de ceramica Edicion Signos", "ceramica", 900);
let  tazaSignos2 = new Producto("Taza de ceramica Edicion Signos", "ceramica", 900);
let tazaSpiderman = new Producto("Taza de ceramica Edicion Superheroes", "ceramica", 9);






    
    



    
 
 
 
