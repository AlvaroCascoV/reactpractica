import React, { Component } from 'react'
import Global from '../Global'
import axios from 'axios'

export default class Jugadores extends Component {
    url = Global.urlEquipos

    findJugadoresEquipo = () => {
        let request = "api/Jugadores/JugadoresEquipos/" + this.props.idEquipo
        axios.get(this.url + request).then(response => {
            console.log("jugadores de " + this.props.idEquipo)
            this.setState({
                jugadores: response.data
            })
        })
    }

    findJugadoresNombre = () => {
        let request = "api/Jugadores/BuscarJugadores/" + this.props.stringBusqueda;
        axios.get(this.url + request).then(response => {
            console.log("buscado de " + this.props.stringBusqueda)
            this.setState({
                jugadores: response.data
            })
        })
    }

    componentDidUpdate = (oldprops) => {
        if (oldprops.idEquipo !== this.props.idEquipo) {
            this.findJugadoresEquipo();
        } else if (oldprops.stringBusqueda !== this.props.stringBusqueda) {
            this.findJugadoresNombre();
        }
    }

    componentDidMount = () => {
        this.findJugadoresEquipo();
    }

    state = {
        jugadores: []
    }
    render() {
        return (<div>
            <h1 style={{ color: "red" }}>Jugadores component</h1>
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
                        this.state.jugadores.map((jugador, index) => {
                            return (
                                <tr key={index}>
                                    <td><img src={jugador.imagen} alt='imagenjugador' style={{ height: "50px" }} /></td>
                                    <td>{jugador.nombre}</td>
                                    <td>{jugador.posicion}</td>
                                    <td>{jugador.pais}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>)
    }
}
// {
//     "idJugador": 1,
//     "nombre": "Antoine Griezmann",
//     "posicion": "Delantero",
//     "imagen": "https://img.a.transfermarkt.technology/portrait/header/125781-1719928503.jpg",
//     "fechaNacimiento": "21/03/1991",
//     "pais": "Francia",
//     "idEquipo": 1
//   },