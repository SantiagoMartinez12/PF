const { conn } = require('../db');
const {Mesa} = conn.models;
 
 
 const modificarMesaQr = async (anterior, actual, id) => {
    function func() {
        return ( ( ( 1+Math.random() ) * 0x10000 ) | 0 ).toString( 16 ).substring( 1 );
        }
     if(anterior < actual){
         let diferencia = actual - anterior

         for(let i = 1 ; i <= diferencia ; i++){
            let UUID = (func() + func() + "-" + func() + "-3" + func().substr(0,2) + "-" + func() + "-" + func() + func() + func()).toLowerCase();
            await Mesa.create({
                id:UUID,
                qr: `http://api.qrserver.com/v1/create-qr-code/?data=[https://www.mozo-virtual.xyz/${id}/${UUID}]&size=[750]x[750]` ,
                name: "mesa " + (i + anterior),
                estado: false,
                cuenta: 0,
                restoId: id
            })
         }
     }
     if(anterior > actual){
        let diferencia = anterior - actual

        for(let i = 0 ; i < diferencia ; i++){
           
           await Mesa.destroy({
               where:{
                   restoId: id,
                   name: "mesa " + (anterior - i)
               }
           })
        }
    }
 } 

 module.exports = modificarMesaQr;