import React, { Component } from 'react'
import { withRouter } from "react-router"

import TopNumberService from '../services/TopNumberService'


class ListTopNumberComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            topNumbers: []
        }

        console.log(this.state.topNumbers);
        console.log(TopNumberService.getTopNumbers());

        this.addTopNumber = this.addTopNumber.bind(this);
        this.deleteTopNumber = this.deleteTopNumber.bind(this);
    }

    componentDidMount() {
        TopNumberService.getTopNumbers().then((res) => {
            this.setState({topNumbers: res.data});

        });
    }

    addTopNumber() {
        this.props.history.push("/calcular_top_number");
    }

    deleteTopNumber(id) {
        TopNumberService.deleteTopNumber(id).then( res => {
            this.setState({topNumbers: this.state.topNumbers.filter(number => number.id !== id)})
        })
    }

    render() {
        return (
            <div class='content-box'>
                <h2 className='text-center'>Lista de Números</h2>

                <div className='row'>
                    <button className='btn btn-primary' onClick={this.addTopNumber}>Calcular Novo Número</button>
                </div>

                <div className='row'>
                    <table className='table table-striped table-bordered'>
                        <thead className='headlist'>
                            <tr>
                                <th>Número Original</th>
                                <th>Resultado</th>
                                <th>Ação</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                
                                this.state.topNumbers.map(
                                    topNumber =>
                                    <tr key={topNumber.id}>
                                        <td> {topNumber.originalNumber}</td>
                                        <td> {topNumber.resultNumber} </td>
                                        <td>
                                            <button onClick={ () => this.deleteTopNumber(topNumber.id)} className="btn btn-danger">Deletar</button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>

                    </table>
                </div>
            </div>
        )
    }
}


export default ListTopNumberComponent
