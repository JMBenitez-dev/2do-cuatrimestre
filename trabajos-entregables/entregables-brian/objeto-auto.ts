class Auto{
    public marca: string;
    public modelo: string;
    public tipo: string;   //naftero-gasolero
    public estaEncendidoApagado: boolean;
    public velocidadActual:number;
    
    constructor (paramMarca:string, paramModelo:string, paramTipo:string, 
        EstaEncendido:boolean, velocidadInicial:number){

        this.marca = paramMarca;
        this.modelo = paramModelo;
        this.tipo = paramTipo;
        this.estaEncendidoApagado = EstaEncendido;
        this.velocidadActual = velocidadInicial;
     
    }

    obtenerMarca():string{
        return this.marca;
    }
    obtenerModelo():string{
        return this.modelo;
    }
    obtenerTipo():string{
        return this.tipo;
    }
    encenderApagar():void{
        if(this.estaEncendidoApagado===true){ //está encendido
            this.estaEncendidoApagado=false;
        }else {
            this.estaEncendidoApagado=true;   //la palabra reservada "this" hace referencia a la variable "estaEncendido"
        }
       
    }
    aumentarVelocidad():void {
       this.velocidadActual = this.velocidadActual + 1;
    }
    disminuirVelocidad():void {
        this.velocidadActual = this.velocidadActual - 1;
    }
   
}

let velocidadInicial:number = 0;

let primerAuto = new Auto ("Audi","A3", "naftero",true,velocidadInicial );
let segundoAuto = new Auto ("Chevrolet","Agile","naftero",true,velocidadInicial);
let tercerAuto = new Auto ("Hyundai","Veloster","naftero",false,velocidadInicial);


console.log ("--------------------------");
console.log (".......AUTOMÓVILES........")
console.log ("--------------------------");
console.log("");
console.log("El modelo del ", primerAuto.obtenerMarca,"es: ", primerAuto.obtenerMarca());
console.log("El motor del ", primerAuto.obtenerMarca,"es: ", primerAuto.obtenerTipo());
console.log("Está encendido el ", primerAuto.obtenerMarca," ", primerAuto.encenderApagar());
console.log("");
console.log(primerAuto.obtenerMarca);

