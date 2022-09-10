class Televisor1{ //el objeto Televisor
                //con la palabra reservada "class" moldea el objeto
    
    public estaPrendido: Boolean; //se declaran con la palabra reservada "public"
    public volumenActual: number;
    public canalActual: number;
    public modelo : string;
    public marca : string;
    public pulgada : number;
  
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
    subirVolumen():void {
        this.volumenActual = this.volumenActual++;
    }
    setearPulgadas(paramPulgada:number):void{
        this.pulgada=paramPulgada;
    } 

}

primerTelevisor.setearPulgadas(43); //le doy una caracteristica sin crear un "constructor"
primerTelevisor.obtenerVolumen();




