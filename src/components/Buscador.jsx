import React, { Component } from 'react'
import Jugadores from './Jugadores'
import Global from '../Global'
import axios from 'axios';

export default class Buscador extends Component {
    cajaNombre = React.createRef();
    selectEquipo = React.createRef();

    url = Global.urlEquipos;
    getEquipos = () => {
        let request = "api/Equipos"
        axios.get(this.url + request).then(response => {
            console.log("leyendo equipos")
            this.setState({
                equipos: response.data
            })
        })
    }

    state = {
        equipos: [],
        busqueda: "",
        idequiposeleccionado: 0,
        mensaje: null
    }

    componentDidMount = () => {
        this.getEquipos();
    }

    seleccionarEquipo = (event) => {
        event.preventDefault();
        let id = this.selectEquipo.current.value
        console.log("equipo " + id)
        this.setState({
            idequiposeleccionado: id
        })
    }

    buscarNombre = (event) => {
        event.preventDefault();
        let stringBusqueda = this.cajaNombre.current.value
        if (stringBusqueda) {
            console.log("buscar " + stringBusqueda)
            this.setState({
                busqueda: stringBusqueda,
                mensaje: null,
            })
        } else {
            this.setState({
                mensaje: "Escribe para buscar"
            })
        }
    }

    render() {
        return (<div>
            <h1>Buscador jugadores</h1>
            <form>
                <label>Nombre de jugador</label>
                <input type='text' ref={this.cajaNombre} className='form-control' />
                {
                    this.state.mensaje && (
                        <h2 style={{ color: "fuchsia" }}>{this.state.mensaje}</h2>
                    )
                }
                <button className='btn btn-danger' onClick={this.buscarNombre}>Buscar jugadores nombre</button>
                <hr />

                <label>Seleccione equipo</label>
                <select className='form-control' ref={this.selectEquipo}>
                    {
                        this.state.equipos.map((equipo, index) => {
                            return (<option key={index} value={equipo.idEquipo}>{equipo.nombre}</option>)
                        })
                    }
                </select>
                <button className='btn btn-info' onClick={this.seleccionarEquipo}>Buscar jugadores equipo</button>
                <hr />

                < Jugadores idEquipo={this.state.idequiposeleccionado} stringBusqueda={this.state.busqueda} />
            </form>
        </div>)
    }
}
