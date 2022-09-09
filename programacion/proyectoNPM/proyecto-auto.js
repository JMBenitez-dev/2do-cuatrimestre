var Auto = /** @class */ (function () {
    function Auto(paramMarca, paramModelo, paramTipo, paramColor, paramAnio, paramCondicion) {
        this.marca = paramMarca;
        this.modelo = paramModelo;
        this.tipo = paramTipo;
        this.color = paramColor;
        this.anio = paramAnio;
        this.condicion = paramCondicion;
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
    Auto.prototype.obtenerColor = function () {
        return this.color;
    };
    Auto.prototype.obtenerAnio = function () {
        return this.anio;
    };
    Auto.prototype.obtenerCondicion = function () {
        return this.condicion;
    };
    return Auto;
}());
var primerAuto = new Auto("audi", "A3", "naftero", "rojo", 2022, true);
var segundoAuto = new Auto("chevrolet", "agile", "naftero", "blanco", 2016, false);
var tercerAuto = new Auto("hyundai", "veloster", "naftero", "azul", 2022, true);
console.log("--------------------------");
console.log(".......AUTOMÓVILES........");
console.log("--------------------------");
console.log("");
console.log("La condición del primer auto disponible es:", primerAuto.obtenerCondicion());
console.log("Tiene las siguientes caracteristicas: ", primerAuto);
