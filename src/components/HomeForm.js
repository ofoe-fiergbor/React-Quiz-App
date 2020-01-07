import React, { Component } from 'react'

export class HomeForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            birthDate: '',
            difficulty: ''
        }
    }
    handleFirstNameChange = (e) => {
        this.setState({
            firstName: e.target.value
        })
    }
    handleLastNameChange = e => {
        this.setState({
            lastName: e.target.value
        })
    }
    handleBirthDateChange = e => {
        this.setState({
            birthDate: e.target.value
        })
    }
    handleEmailChange = e => {
        this.setState({
            email: e.target.value
        })
    }
    handleDifficultySelect = e => {
        this.setState({
            difficulty: e.target.value
        })
    }
    handleSubmit =()=>{
        alert('this shit works')
    }
    render() {
        const { firstName, lastName, email, birthDate, difficulty } = this.state
        return (
            <div>
                <h2 className='text-center'>You ready to show me how smart you are?</h2>

                <div>
                    <center>
                        <form onSubmit={this.handleSubmit}>
                            <div className="row">
                                <div className="form-group col-md-5">
                                    <label className='text-left'>First Name</label>
                                    <input type="text" className="form-control" placeholder="First Name" required value={firstName} onChange={this.handleFirstNameChange} />
                                </div>
                                <div className="form-group col-md-7">
                                    <label className='text-left'>Last Name</label>
                                    <input type="text" className="form-control" placeholder="Last Name" required value={lastName} onChange={this.handleLastNameChange} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col-md-12">
                                    <label className='text-left'>Birth Date</label>
                                    <input type="date" className="form-control" placeholder="Birth Date" value={birthDate} onChange={this.handleBirthDateChange} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col-md-7">
                                    <label className='text-left'>Email</label>
                                    <input type="email" className="form-control" placeholder="Email" required value={email} onChange={this.handleEmailChange} />
                                </div>
                                <div className='col-md-5'>
                                    <label className='text-left'>Difficulty</label>
                                    <select class="form-control" required value={difficulty} onChange={this.handleDifficultySelect}>
                                        <option>Easy</option>
                                        <option>Medium</option>
                                        <option>Hard</option>
                                    </select>
                                </div>
                            </div>
                            <br />
                            <div className='text-center'>
                                <button type="submit" className="btn btn-default">Start Quiz</button>
                            </div>
                        </form>
                    </center>
                </div>

            </div>
        )
    }
}

export default HomeForm
