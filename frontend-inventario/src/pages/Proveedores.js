import React from "react";
import { HeaderMain } from "../components/HeaderMain";

function Proveedores(){
    return(
        <>
            <HeaderMain/>
            <div className="p-3">
                <button type="button" className="btn btn-primary disabled">Nada que mostrar por ahora</button>
            </div>
        </>
    )
}

export { Proveedores }