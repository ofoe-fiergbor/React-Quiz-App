import React, { Component } from 'react'

export class QuizQuestion extends Component {
    render(props) {
        return (
            <div>
                <h1>Question {this.props.questionNumber}/{this.props.total}</h1>
                <h3>{this.props.question}</h3>
            </div>
        )
    }
}

export default QuizQuestion
