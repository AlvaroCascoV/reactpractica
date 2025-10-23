import React, { Component } from 'react'

export default class Jugadores extends Component {
    render() {
        return (<div>
            <h1>Jugadores component</h1>
            <table className='table table-info'>
                <thead>
                    <tr>
                        <th>Imagen</th>
                        <th>Nombre</th>
                        <th>Posición</th>
                        <th>Pais</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        //cargar jugadores
                    }
                </tbody>
            </table>
        </div>)
    }
}
