import './cabecera.css';
export const Cabecera=()=>{
    const curso='Autos';
    return(
        <header className='header-wraper' >
            <h1 className='header-text' >{curso}</h1>
        </header>
    )
}