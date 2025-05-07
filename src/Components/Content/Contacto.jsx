import React from "react"
import { useState } from "react"


export const iniciarForm=(inicia_datos,Validar)=>{
    const [form,setForm]=useState(inicia_datos);
    const [carga,setCarga]=useState(false);
    const [arr_error,setArr_error]=useState({});


    const Cambiar =(e)=>{
        const {name,value}=e.target;
        setForm({
            ...form,
            [name]:value
        })
    }

    const Enviar=(e)=>{
        e.preventDefault();
        const error=Validar(form);
        setArr_error(error);
        if(Object.keys(error).length===0){
            alert('Formulario Enviado');
        }
    }
    return {form,Cambiar,Enviar,arr_error};
    
}

export const Contacto=()=>{
    const Iniciar_datos={
        nombre:'',
        direccion:'',
        edad:'',
        numero_dni:'',
        correo:'',
        telefono:'',
        codigo_alumno:''
    }
    const Validar=(form)=>{
        let arr_error={};
        let expresion=null;

        expresion=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
        if(!form.nombre.trim()){
            arr_error.nombre='escriba nombre';
        }else if (!expresion.test(form.nombre)){
            arr_error.nombre='escriba un nombre correcto';
        }
        expresion=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
        if(!form.direccion.trim()){
            arr_error.direccion='escriba la direccion';
        }else if (!expresion.test(form.direccion)){
            arr_error.ireccion='escriba una direccion correcto';
        }
        //edad
        expresion=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
        if(!form.edad.trim()){
            arr_error.edad='escriba una edad';
        }else if (!expresion.test(form.edad)){
            arr_error.edad='escriba una edad correcto';
        }
        //numero_dni
        expresion=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
        if(!form.numero_dni.trim()){
            arr_error.numero_dni='escriba un dni';
        }else if (!expresion.test(form.numero_dni)){
            arr_error.numero_dni='escriba un dni correcto';
        }
        //correo
        expresion=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
        if(!form.correo.trim()){
            arr_error.correo='escriba correo';
        }else if (!expresion.test(form.correo)){
            arr_error.correo='escriba un correo correcto';
        }

        //telefono
        expresion=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
        if(!form.telefono.trim()){
            arr_error.telefono='escriba telefono';
        }else if (!expresion.test(form.telefono)){
            arr_error.telefono='escriba un telefono correcto';
        }

        //codigo_alumno
        expresion=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
        if(!form.codigo_alumno.trim()){
            arr_error.codigo_alumno='escriba codigo de alumno';
        }else if (!expresion.test(form.codigo_alumno)){
            arr_error.codigo_alumno='escriba un codigo correcto';
        }
        return arr_error;
    }
    const {form,Cambiar,Enviar,arr_error}=iniciarForm(Iniciar_datos,Validar);

    return(
        <div className="row justify-content-center">
            <div className="col-6" >
                <form className="m-50" onSubmit={Enviar} >
                    
                    <label className="form-label" >Nombre</label>
                    <input type="text" className="form-control" name="nombre" value={form.nombre} id="nombre" maxLength={50} onChange={Cambiar} />
                    {arr_error.nombre ? <div className="alert alert-danger p-1" >{arr_error.nombre}</div> : null }
                    
                    <label className="form-label" >Direccion</label>
                    <input type="text" className="form-control" name="direccion" value={form.direccion} id="direccion" maxLength={50} onChange={Cambiar} />
                    {arr_error.direccion ? <div className="alert alert-danger p-1" >{arr_error.direccion}</div> : null }
                    
                    <label className="form-label" >Edad</label>
                    <input type="text" className="form-control" name="edad" value={form.edad} id="edad" maxLength={2} onChange={Cambiar} />
                    {arr_error.edad ? <div className="alert alert-danger p-1" >{arr_error.edad}</div> : null }
                    
                    <label className="form-label" >DNI</label>
                    <input type="text" className="form-control" name="numero_dni" value={form.numero_dni} id="numero_dni" maxLength={8} onChange={Cambiar} />
                    {arr_error.numero_dni ? <div className="alert alert-danger p-1" >{arr_error.numero_dni}</div> : null }
                    
                    <label className="form-label" >Telefono</label>
                    <input type="text" className="form-control" name="telefono" value={form.telefono} id="telefono" maxLength={9} onChange={Cambiar} />
                    {arr_error.telefono ? <div className="alert alert-danger p-1" >{arr_error.telefono}</div> : null }
                    
                    <label className="form-label" >Correo</label>
                    <input type="email" className="form-control" name="correo" value={form.correo} id="correo" maxLength={50} onChange={Cambiar} />
                    {arr_error.correo ? <div className="alert alert-danger p-1" >{arr_error.correo}</div> : null }
                    
                    <label className="form-label" >Codigo Alumno</label>
                    <input type="text" className="form-control" name="codigo_alumno" value={form.codigo_alumno} id="codigo_alumno" maxLength={11} onChange={Cambiar} />
                    {arr_error.codigo_alumno ? <div className="alert alert-danger p-1" >{arr_error.codigo_alumno}</div> : null }
                    <button 
                        type="submit" 
                        className="btn btn-warning mt-1 w-100"
                        name="enviar" 
                        id="enviar"
                    >
                        Enviar
                    </button>
                </form>
            </div>
        </div>
    );




}
