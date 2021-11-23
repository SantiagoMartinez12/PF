const { conn } = require('../db');
const { Mesa } = conn.models;



const generadorQr = async (cantidad, id) => {
    function func() {
        return ( ( ( 1+Math.random() ) * 0x10000 ) | 0 ).toString( 16 ).substring( 1 );
        }
        // For calling it, stitch '3' in the 3rd group
        
        for( let i = 0; i < cantidad; i++){
            let UUID = (func() + func() + "-" + func() + "-3" + func().substr(0,2) + "-" + func() + "-" + func() + func() + func()).toLowerCase();
            await Mesa.create({
                id:UUID,
                qr: `http://api.qrserver.com/v1/create-qr-code/?data=[http://localhost:3000/${id}/${UUID}]&size=[750]x[750]` ,
                name: "mesa"+i+1,
                estado: false,
                cuenta: 0,
                restoId: id
            })
    }   
}

module.exports = generadorQr;