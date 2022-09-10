var Hijo = /** @class */ (function () {
    function Hijo(paramAltura, paramPeso, paramEdad, paramPercentil) {
        this.altura = paramAltura;
        this.peso = paramPeso;
        this.edad = paramEdad;
        this.percentil = paramPercentil;
    }
    Hijo.prototype.obtenerAltura = function () {
        return this.altura;
    };
    Hijo.prototype.obtenerPeso = function () {
        return this.peso;
    };
    Hijo.prototype.obtenerEdad = function () {
        return this.edad;
    };
    Hijo.prototype.obtenerPercentil = function () {
        if (this.percentil === true) {
            console.log("dentro de los parámetros normales");
        }
        else {
            this.percentil = true;
            console.log("fuera de los parámetros normales");
        }
    };
    return Hijo;
}());
var primerHijo = new Hijo(120, 30, 5, true);
console.log("la edad del primer niño es:", primerHijo.obtenerEdad);
//let edadDelPrimerHijo:number = primerHijo.obtenerEdad;
var segundoHijo = new Hijo(150, 45, 9, false);
console.log("la altura del segundo niño es:", segundoHijo.obtenerAltura);
//let alturaDelSegundoHijo:number = segundoHijo.obtenerAltura;
