module.exports = class Eventos {

    constructor(db){
        this.db = db
    }
    getEvento() {
        return this.db.any("SELECT * FROM evento ")
            .then(function (data) { // el them tiene una promesa
                return(data)
            })
            .catch(function (error) {
                return ({ error })
            });
    }
    getEventoById(id) {
        return this.db.any("SELECT * FROM evento WHERE id_evento="+id)
            .then(function (data) { // el them tiene una promesa
                return({data})
            })
            .catch(function (error) {
                return ({ error })
            });
    }
    setEvento(evento) {
        return this.db.none("INSERT INTO evento (fecha_evento,nombre_evento,lugar_evento,descripcion_evento,numero_personas_evento) VALUES ($<evento.fecha_evento>,$<evento.nombre_evento>,$<evento.lugar_evento>,$<evento.descripcion_evento>,$<evento.numero_personas_evento>)",{evento})
    }
    updateEvento(evento,id){
        return this.db.none("UPDATE evento SET nombre_evento= $<evento.nombre_evento>,lugar_evento = $<evento.lugar_evento>, descripcion_evento= $<evento.descripcion_evento> , numero_personas_evento= $<evento.numero_personas_evento>  where id_evento = "+id ,{evento})
    }
    deleteEvento(id){
        return this.db.none("DELETE FROM evento WHERE id_evento= "+id)
    }
    getInscripcion() {
        return this.db.any("SELECT * FROM inscripcion")
            .then(function (data) { // el them tiene una promesa
                return(data)
            })
            .catch(function (error) {
                return ({ error })
            });
    }
    getInscripcionByName(name_evento) {
        return this.db.any("select * from inscripcion ins , evento even where ins.evento_id_evento = even.id_evento AND even.nombre_evento ="+ "'"+name_evento+"'")
            .then(function (data) { // el them tiene una promesa
                return(data)
            })
            .catch(function (error) {
                return ({ error })
            });
    }
    

}