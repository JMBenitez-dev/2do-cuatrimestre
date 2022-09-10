var Auto = /** @class */ (function () {
    function Auto(paramMarca, paramModelo, paramTipo, EstaEncendido, velocidadInicial) {
        this.marca = paramMarca;
        this.modelo = paramModelo;
        this.tipo = paramTipo;
        this.estaEncendidoApagado = EstaEncendido;
        this.velocidadActual = velocidadInicial;
    }
    Auto.prototype.obtenerMarca = function () {
        return this.marca;
    };
    Auto.prototype.obtenerModelo = function () {
        return this.modelo;
    };
    Auto.prototype.obtenerTipo = function () {
        return this.tipo;
    };
    Auto.prototype.encenderApagar = function () {
        if (this.estaEncendidoApagado === true) { //está encendido
            this.estaEncendidoApagado = false;
        }
        else {
            this.estaEncendidoApagado = true; //la palabra reservada "this" hace referencia a la variable "estaEncendido"
        }
    };
    Auto.prototype.aumentarVelocidad = function () {
        this.velocidadActual = this.velocidadActual + 1;
    };
    Auto.prototype.disminuirVelocidad = function () {
        this.velocidadActual = this.velocidadActual - 1;
    };
    return Auto;
}());
var primerAuto = new Auto("Audi", "A3", "naftero", true, 40);
var segundoAuto = new Auto("Chevrolet", "Agile", "naftero", true, 60);
var tercerAuto = new Auto("Hyundai", "Veloster", "naftero", false, 20);
console.log("--------------------------");
console.log(".......AUTOMÓVILES........");
console.log("--------------------------");
console.log("");
console.log("El modelo del ", primerAuto.obtenerMarca(), "es: ", primerAuto.obtenerMarca());
console.log("El motor del ", primerAuto.obtenerMarca(), "es: ", primerAuto.obtenerTipo());
console.log("Está encendido el ", primerAuto.obtenerMarca(), " ", primerAuto.encenderApagar());
console.log("");
console.log(primerAuto.obtenerMarca);
