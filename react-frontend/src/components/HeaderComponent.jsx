import React, { Component } from 'react'


class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }


    render() {
        return (
            <div>
                <header className='header'>
                    <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
                        <div>
                            <a href='htpps://github.com/RaquelBehrens/desafio-bridge-web-full-stack' className='navbar-brand'>Top Number App Source Code</a>
                        </div>

                    </nav>
                </header>
            </div>
        )
    }
}

export default HeaderComponent