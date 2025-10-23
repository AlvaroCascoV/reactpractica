import React, { Component } from 'react'
import Jugadores from './Jugadores'
import Global from '../Global'
import axios from 'axios';

export default class Buscador extends Component {
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
    }

    componentDidMount = () => {
        this.getEquipos();
    }
    render() {
        return (<div>
            <h1>Buscador jugadores</h1>
            <form>
                <label>Nombre de jugador</label>
                <input type='text' ref={this.cajaNombre} className='form-control' />
                <button className='btn btn-danger'>Buscar jugadores nombre</button><hr />
                <label>Seleccione equipo</label>
                <select className='form-control'>
                    {
                        this.state.equipos.map((equipo, index) => {
                            return (<option key={index}>{equipo.nombre}</option>)
                        })
                    }
                </select>
                <button className='btn btn-info'>Buscar jugadores equipo</button>
                <hr />
                <Jugadores />
            </form>
        </div>)
    }
}
