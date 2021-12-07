import logo from "../../../assets/Logo.png";

export default function ErrorQr(){
    return(
        <div>
            <br/>
            <div className="col">
                <img src={logo} alt="Logo" width="20%"  />
            </div>
            <br/>
            <h3>Error en código QR!</h3>
            <br/>
            <h4>por favor, vuelvelo a scanear.</h4>
            <h4>Si el error persiste,</h4>
            <h4>comunicate con personal del resto.</h4>
        </div>
    )
}