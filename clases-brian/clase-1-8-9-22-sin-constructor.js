var Televisor1 = /** @class */ (function () {
    function Televisor() {
    }
    Televisor.prototype.prenderApagar = function () {
        if (this.estaPrendido === true) {
            this.estaPrendido = false;
        }
        else {
            this.estaPrendido = true; //la palabra reservada "this" hace referencia a la variable "estaPrendido"
        }
    };
    Televisor.prototype.obtenerVolumen = function () {
        return this.volumenActual;
    };
    Televisor.prototype.subirVolumen = function () {
        this.volumenActual = this.volumenActual++;
    };
    Televisor.prototype.setearPulgadas = function (paramPulgada) {
        this.pulgada = paramPulgada;
    };
    return Televisor;
}());
var primerTelevisor = new Televisor();
primerTelevisor.setearPulgadas(43); //le doy una caracteristica sin crear un "constructor"
primerTelevisor.obtenerVolumen();
