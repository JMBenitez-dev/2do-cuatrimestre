class Auto{
    public marca: string;
    public modelo: string;
    public tipo: string;   //naftero-gasolero
    public color: string;
    public anio: number;
    public condicion:boolean;


    constructor (paramMarca:string, paramModelo:string, paramTipo:string, paramColor:string, paramAnio:number, paramCondicion:boolean){
        this.marca = paramMarca;
        this.modelo = paramModelo;
        this.tipo = paramTipo;
        this.color = paramColor;
        this.anio = paramAnio;
        this.condicion = paramCondicion;
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
    obtenerColor():string{
        return this.color;
    }
    obtenerAnio():number{
        return this.anio;
    }
    obtenerCondicion():boolean{
       return this.condicion;
    }
   
}

let primerAuto = new Auto ("audi","A3","naftero","rojo",2022,true);
let segundoAuto = new Auto ("chevrolet","agile","naftero","blanco",2016,false);
let tercerAuto = new Auto ("hyundai","veloster","naftero","azul",2022,true);


console.log ("--------------------------");
console.log (".......AUTOMÓVILES........")
console.log ("--------------------------");
console.log("");
console.log("La condición del primer auto disponible es:", primerAuto.obtenerCondicion());
console.log("Tiene las siguientes caracteristicas: ",primerAuto);