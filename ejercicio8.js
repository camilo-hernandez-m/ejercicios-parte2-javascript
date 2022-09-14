addEventListener("DOMContentLoaded", ()=>{
    //definir que parte le corresponde a lorena de la venta de las tapas 
    // martin toma 2/3 y jairo 1/4
    plata=float(input("cantidad de dinero que cree que se ganaron"))
    from fractions import Fraction
    mrtin=Fraction(2/3)
    jr=Fraction(1/4)
    //procesos
    lrn=(mrtin-jr)
    
    //salida o entrega de datos
    print("a lorena le corresponde: ",lrn)
})