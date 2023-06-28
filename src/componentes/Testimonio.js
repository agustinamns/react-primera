import React from "react";
import '../hojas-de-estilo/Testimonio.css'

function Testimonio(){
    return(
        <div className="contenedor-testimonio">
            <img className="imagen-testimonio"
            src={require("../imagenes/icon-1.jpg")}
            />

            <div className='contenedor-texto-testimonio'>
                <p className='nombre-testimonio'>emma boston</p>
                <p className="cargo-testimonio">ingeniera de software en spotify</p>
                <p className="texto-testimonio">Lorem imput etcetc texto random aqui, de relleno, para que haga bulto, sin sentido, sin intencion, 
                mal escrito. Mal redactado, etc. Lorem imput etcetc texto random aqui, de relleno, para que haga bulto, sin sentido,Lorem imput etcetc texto random aqui, de relleno, para que haga bulto, sin sentido,
                Lorem imput etcetc texto random aqui, de relleno, para que haga bulto, sin sentido,Lorem imput etcetc texto random aqui, de relleno, para que haga bulto, sin sentido,</p>
            </div>


        </div>
    )
}

export default Testimonio;