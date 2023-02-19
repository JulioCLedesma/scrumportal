import React, {useState} from 'react'
import PropTypes from "prop-types";

export const EjercicioComponent = ({year}) => {

    const[yearNow, setYearNow] = useState(year);

    const siguiente = e=>{
        setYearNow(yearNow+1);
    }

    const anterior = e=>{
        setYearNow(yearNow-1);
    }

    const cambiarYear = e => {
        let dato = parseInt(e.target.value) ;

        if(Number.isInteger(dato)){
            setYearNow(dato);
        }else {
            setYearNow(year);
        }
        
    }

  return (
    <div>
        <h2>Ejercicio con Eventos y UseState</h2>
        <strong className='label label-green'>
            {yearNow}
        </strong>

        <p>
            <button onClick={siguiente}>Ir al siguiente</button>
            &nbsp;
            <button onClick={anterior}>Ir al anterior</button>
        </p>
        <p>
            <input 
            onChange={cambiarYear}
            type="text" 
            placeholder='Cambia el año' />
        </p>
        
    </div>
  )
}
 EjercicioComponent.propTypes = {
    year: PropTypes.number.isRequired
 }