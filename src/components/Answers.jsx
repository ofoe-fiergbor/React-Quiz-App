import React, { Component } from 'react'

export class Answers extends Component {

    click = e => {
        alert('it works')
    }
    render() {
        return (
            <div>
                <div className='col-md-3 option1' onClick={this.click}>
                    <h4 className='text-left'>Option</h4> <br />
                    <h3>{this.props.answer}</h3>
                </div>

            </div>
        )
    }
}

export default Answers
