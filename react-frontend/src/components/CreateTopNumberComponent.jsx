import React, { Component } from 'react'
import { withRouter } from "react-router"
import TopNumberService from '../services/TopNumberService'

class CreateTopNumberComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            novoNumero: ''
        }

        this.changeNewNumberHandler = this.changeNewNumberHandler.bind(this);
        this.createTopNumber = this.createTopNumber.bind(this);
    }

    changeNewNumberHandler= (event) => {
        this.setState({novoNumero: event.target.value});
    }
    
    createTopNumber = (e) => {
        e.preventDefault();
        let newNumber = {originalNumber: this.state.novoNumero};
        console.log('novo numero => ' + JSON.stringify(newNumber));

        TopNumberService.createTopNumber(newNumber).then(res => {
            this.props.history.push("/listar_top_numbers");
        });

        this.props.history.push("/listar_top_numbers");
    }

    cancel() {
        this.props.history.push("/listar_top_numbers");
    }


    render() {
        return (
            <div className='content-box'>
                <div className='container'>
                    <div className='row'>
                        <div className='card col-md-6 offset-md-3 offset-md-3'>
                            <h3 className='text-center'>Calcular Novo Número</h3>
                            <div className='card-body'>
                                <form class='form-newNumber'>
                                    <div className='form-group'>
                                        <label>Novo número</label>
                                        <input placeholder="Novo número" name="novoNumero" className="form-control"
                                            value={this.state.novoNumero} onChange={this.changeNewNumberHandler}></input>
                                    </div>

                                    <button className='btn btn-success' onClick={this.createTopNumber}>Calcular</button>
                                    <button className='btn btn-danger' onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancelar</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CreateTopNumberComponent