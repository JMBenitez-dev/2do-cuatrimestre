class Televisor { //el objeto Televisor
    //con la palabra reservada "class" moldea el objeto

public estaPrendido: Boolean; //se declaran con la palabra reservada "public"
public volumenActual: number;
public canalActual: number;
public modelo : string;
public marca : string;
public pulgada : number;


    constructor (paramPrendido:boolean,paramVolumen:number, paramCanal:number, paramModelo:string,paramMarca:string, paramPulgada:number){ // éstos parametros pueden ser opcionales
        this.estaPrendido = paramPrendido;
        this.volumenActual = paramVolumen;
        this.canalActual = paramCanal;
        this.modelo = paramModelo;
        this.marca = paramMarca;
        this.pulgada = paramPulgada;

    }
    prenderApagar():void{
        if(this.estaPrendido===true){
            this.estaPrendido=false;
        }else {
            this.estaPrendido=true;   //la palabra reservada "this" hace referencia a la variable "estaPrendido"
        }
    }

    obtenerVolumen():number{
        return this.volumenActual;
     }
    subirVolumen(): void {
        this.volumenActual = this.volumenActual++;
    }
    setearPulgadas(paramPulgada:number):void{
        this.pulgada=paramPulgada;
    }
    
}

let primerTelevisor = new Televisor(true,45,67,"pepito,LG,45);    
//a ésto se le llama instanciar (copiar) un objeto(Televisor)

let segundoTelevisor = new Televisor(false,29,40,lalala,Sansung,60);
 //tdv no podemos diferenciar los objetos, hasta ahora son todos iguales
        




