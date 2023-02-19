import React, {useState} from 'react'

export const MiPrimerEstado = () => {
  /*
    let nombre = "Julio Cesar";
    const cambiarNombre = e =>{
      nombre = "Fulanito";
    };
    */
    const [ nombre, setNombre] = useState("Julio Cesar");
    const cambiarNombre = (e, nombreFijo) => {
        setNombre(nombreFijo);
    }

  return (
    <div>
      <h3>Componente: MiPrimerEstado</h3>
      <strong className='label'>{nombre}</strong>
      &nbsp;
      <button onClick={ e => cambiarNombre(e, "Fulanito")}>Cambiar por fulanito</button>

      &nbsp;
      <input type= "text" onChange ={e => cambiarNombre(e, e.target.value)} placeholder='Cambia el nombre'/>

    </div>
  )
}


