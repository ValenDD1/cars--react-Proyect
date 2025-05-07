import React from "react";
import { Outlet } from "react-router-dom";
import {Cabecera} from "../Cabecera/Cabecera";
import {Menu} from "../Content/Menu";
import {Pie} from "../PieContent/Pie";

import './principal.css'

export const Principal=()=>{
    return(
        <div className="principal-container">
            <React.Fragment>
                <header className="principal-header" >
                    <Cabecera></Cabecera>
                    <Menu></Menu>
                </header>
                <main className="principal-main" >
                    <Outlet/>
                </main>
                <footer className="principal-footer">
                    <Pie></Pie>
                </footer>
                
            </React.Fragment>
        </div>
    )
}







