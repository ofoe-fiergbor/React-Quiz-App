import React, { Component } from 'react'

export class Answers extends Component {

    click = e => {
        alert('it works')
    }
    render() {
        return (
            <div>
                <div className='col-md-3 option1 text-center' onClick={this.click}>
                    <br/>
                    <br/>
                    <h3>{this.props.answer}</h3>
                </div>

            </div>
        )
    }
}

export default Answers
