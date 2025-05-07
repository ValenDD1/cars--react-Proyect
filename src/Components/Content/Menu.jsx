import React from "react";
import { NavLink } from "react-router-dom";
import './menu.css'

export const Menu=()=>{

    const MarcaActivo=(a)=> (a ? 'opcion-activa': null);




    return(
        <React.Fragment>
            <nav className="nav-container">
                <ul className="ul-data" >
                    <li>
                        <NavLink end className={(isActive)=>MarcaActivo(isActive)} to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink end className={(isActive)=>MarcaActivo(isActive)} to="/auto">Auto</NavLink>
                    </li>
                    <li>
                    <NavLink end className={(isActive)=>MarcaActivo(isActive)} to="/servicio">Servicio</NavLink>
                    </li>
                    <li>
                    <NavLink end className={(isActive)=>MarcaActivo(isActive)} to="/contacto">Contacto</NavLink>
                    </li>
                </ul>
            </nav>
        </React.Fragment>
    );
}




