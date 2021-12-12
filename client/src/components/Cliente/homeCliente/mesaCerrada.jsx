import logo from "../../../assets/Logo.png";
var global = require('../../Resto/global.module.css')

export default function MesaCerrada(){

    return(
        <div className="container">
            <div className={global.centrar}>
                <div className="col-auto  text-center">
                    <div className={global.whiteclientlog}>
                        <img src={logo} alt="Logo" width="50%" className="img-fluid"/>
                        <br/>
                        <br/>
                        <br/>
                        <h3>¡Gracias por tu visita!</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}