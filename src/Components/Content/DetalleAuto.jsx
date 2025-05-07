import React from "react"
import { NavLink } from "react-router-dom"
import { useParams } from "react-router-dom"
import './detalleauto.css'

import foro from '../../assets/images/toyota-logo.jpg'
import hyunday from '../../assets/images/hyunday-logo.png'
import audi from '../../assets/images/audi-logo.png'
import suzuki from '../../assets/images/suzuki-logo.jpg'
export const DetalleAuto=()=>{
    const arr_parametro=useParams(); 

    const Arr_auto=[
        {codigo:1,nombre:'Toyota',modelo:'Corolla',aa:2024,precio:1000.344,tipo:3,imagen:foro},
        {codigo:2,nombre:'Hyunday',modelo:'Tucson',aa:2024,precio:1000.344,tipo:3,imagen:hyunday},
        {codigo:3,nombre:'Audi',modelo:'A6',aa:2024,precio:1000.344,tipo:3,imagen:audi},
        {codigo:4,nombre:'Suzuki',modelo:'Swift',aa:2024,precio:1000.344,tipo:3,imagen:suzuki},
        {codigo:5,nombre:'Kia',modelo:'Rio',aa:2024,precio:1000.344,tipo:3,imagen:hyunday},
        {codigo:6,nombre:'Nissan',modelo:'Sentra',aa:2024,precio:1000.344,tipo:3,imagen:foro}
    ]

    const Auto = Arr_auto.find(auto => auto.codigo == arr_parametro.codigo);


    const FormatearNumero=(n)=>n.toLocaleString('es-PE',
        {minimunFractionDigits:2,maximunFractionDigits:2});

    const contenido=[];

    if(!Auto){
        contenido.push(<h3>El auto no existe</h3>);
    }else{
        contenido.push(
            <article key={Auto.codigo}>
                <div className="card border-succes"> 
                    <img src={Auto.imagen} alt={Auto.nombre} width={400} className="card-ing-top"/>
                    <div className="card-body" >
                        <h3 className="card-title" > {Auto.nombre}-{Auto.modelo} ({Auto.aa}) </h3>
                        <h5 className="card-text" > ${FormatearNumero(Auto.precio)} </h5>
                        <h5 className="card-text" > s/.{FormatearNumero(Auto.precio*3.75)} </h5>
                        <NavLink className="btn btn-outline-danger" to={`/auto`}>Regresar</NavLink>
                    </div>
                    <div className="card-footer">
                        <h5>
                            { (Auto.tipo==1 ? "Auto": (Auto.tipo==2 ? "Hatchback":"Camioneta"))}
                        </h5>
                    </div>

                </div>
            </article>
        );
    }

    return(
        <section className="detalle-container" >
            {contenido}
        </section>
    )
}
