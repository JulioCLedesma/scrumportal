import React from 'react'

export const Listado = () => {

  const conseguirPeliculas = () =>{
    let peliculas = JSON.parse(localStorage.getItem('Pelis'))
  }


  return (
    <>
      <article className="peli-item">
            <h3 className="title">Desarrollo Web</h3>
            <p className="descricion">juliocesar.mx</p>

            <button className="edit">Editar</button>
            <button className="delete">Borrar</button>
        </article>






{/*
        <article className="peli-item">
            <h3 className="title">Desarrollo Web</h3>
            <p className="descricion">juliocesar.mx</p>

            <button className="edit">Editar</button>
            <button className="delete">Borrar</button>
        </article>

        <article className="peli-item">
            <h3 className="title">Desarrollo Web</h3>
            <p className="descricion">juliocesar.mx</p>

            <button className="edit">Editar</button>
            <button className="delete">Borrar</button>
        </article>

        <article className="peli-item">
            <h3 className="title">Desarrollo Web</h3>
            <p className="descricion">juliocesar.mx</p>

            <button className="edit">Editar</button>
            <button className="delete">Borrar</button>
        </article>
  */}
    </>
  )
}
