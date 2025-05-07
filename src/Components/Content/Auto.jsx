import './listarauto.css'
import React from "react";
import { NavLink } from "react-router-dom";

import foro from '../../assets/images/toyota-logo.jpg'
import hyunday from '../../assets/images/hyunday-logo.png'
import audi from '../../assets/images/audi-logo.png'
import suzuki from '../../assets/images/suzuki-logo.jpg'
export const Auto=(props)=>{

    const {codigo,nombre,imagen}=props;
    const AbriDetalle=(cod)=>`/auto/${cod}`;



    return(
        <React.Fragment>
            <div className="card-body" >
                <img src={imagen} alt={nombre} width={100} className="logo"/>
                <h3 className="card-title" > {nombre}</h3>
                <NavLink className="btn btn-outline-secondary" to={AbriDetalle(codigo)}>Ver Detalle</NavLink>
            </div>
        </React.Fragment>
    )
}


export const ListarAuto=()=>{ 
    const arr_auto=[
        {codigo:1,nombre:'Toyota',imagen:foro},
        {codigo:2,nombre:'Hyunday',imagen:hyunday},
        {codigo:3,nombre:'Audi',imagen:audi},
        {codigo:4,nombre:'Suzuki',imagen:suzuki},
        {codigo:5,nombre:'Kia',imagen:foro},
        {codigo:6,nombre:'Nissan',imagen:suzuki},
    ]
    let contenido=[];

    arr_auto.forEach(auto=>contenido.push(
        <article key={auto.codigo} >
            <Auto codigo={auto.codigo} nombre={auto.nombre} imagen={auto.imagen}/>
        </article>
        
    
    ));

    return (
        <section className="listar-container" >
            {contenido}
        </section>
    )


}








