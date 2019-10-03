module.exports = class Connect {
    
	constructor(dataBase) { // la mejor forma de hacerlo es en un archivo jso como configuracion 
        var pgp = require("pg-promise")(/*options*/);
        this.db = pgp("postgres://postgres:admin@localhost:5432/"+ dataBase);
    }

    getConnect(){
    	return this.db	
    }
}