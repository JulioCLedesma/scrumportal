import React, { useState } from 'react'

export const FormularioComponents = () => {

    const [usuario, setUsuario] = useState({});

    const datosFormulario = e => {
        e.preventDefault();
        
        let datos = e.target;
        let usuario = {
            nombre: datos.nombre.value,
            apellido: datos.apellido.value,
            genero: datos.genero.value,
            bio: datos.bio.value,
        };

        console.log(usuario)

        setUsuario(usuario);
    }

    const cambiarDatos = e =>{
        console.log(e.target);
        let name_del_imput = e.target.name;
        let usuario_para_modificar = usuario;

    if (name_del_imput === "nombre") {

    }
    
    if (name_del_imput === "apellido") {

    }

    if (name_del_imput === "genero") {

    }

    if (name_del_imput === "bio") {

    }



  return (
    <div>

        <h1>JULIO CESAR LEDESMA MARTINEZ</h1>
        <h2>Formularios</h2>

        {usuario.bio && usuario.bio.length >=1 &&
            (
            <div className='info_Usuario label label-gray' >
                {usuario.nombre} {usuario.apellido} es un {usuario.genero} y su Biografía es <p>{usuario.bio}</p>
            </div>
            )
        }

        <form onSubmit={datosFormulario}>
            <input type="text" placeholder='Nombre' name='nombre'/>
            <input type="text" placeholder='Apellido' name='apellido' onChange={cambiarDatos}/>


            <select name='genero' onChange={cambiarDatos}>
                    <option value="Hombre">Hombre</option>
                    <option value="Mujer">Mujer</option>
            </select>
                
                <textarea placeholder='Biografía' name='bio' onChange={cambiarDatos}></textarea>
            
                <input type='submit' value='Enviar'/>
        </form>


    </div>
  )
}
