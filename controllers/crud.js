//Invocamos a la conexion de la DB
const conexion = require('../database/db');
//GUARDAR un REGISTRO
exports.save = (req, res)=>{
    const nombre = req.body.nombre;
    const tipo = req.body.tipo;
    const sexo = req.body.sexo;
    const edad = req.body.edad;
    conexion.query('INSERT INTO mascotas SET ?',{nombre:nombre, tipo:tipo, sexo:sexo, edad:edad,}, (error, results)=>{
        if(error){
            console.log(error);
        }else{
            //console.log(results);   
            res.redirect('/');         
        }
});
}


//ACTUALIZAR un REGISTRO
exports.update = (req, res)=>{
    const id = req.body.id;
    const nombre = req.body.nombre;
    const tipo = req.body.tipo;
    const sexo = req.body.sexo;
    const edad = req.body.edad;
    conexion.query('UPDATE mascotas SET ? WHERE id = ?', [{nombre:nombre, tipo:tipo, sexo:sexo, edad:edad}, id], (error, results)=>{
        if(error){
            console.log(error);
        }else{           
            res.redirect('/');         
        }
});
}; 