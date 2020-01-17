import React, { Component } from 'react'
import QuizQuestion from './QuizQuestion'
import Answers from './Answers'
import QuizData from '../data/data.json'

export class MainDisplay extends Component {
    constructor(props) {
        super(props)

        this.state = {
            n: 0,
            userAnswer: null,
            answers: [],
            total: 0,
            question: '',
        }
    }

    loadQuize = () => {
        const { n } = this.state;
        this.setState({
            total: QuizData.length,
            n: n + 1,
            question: QuizData[n].question,
            answers: [
                ...QuizData[n].incorrect_answers,
                QuizData[n].correct_answer
            ]


        })
    }

    componentDidMount = () => {
        this.loadQuize()
    }
    handleNextQuestion = ()=>{
        this.setState({
            n: this.state.n +1
        })
        console.log(this.state.n)
    }

    render() {
        const { question, answers, n, total } = this.state
         

        return (
            <div>
                <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-md-4">
                        <QuizQuestion question={question}
                            total={total} questionNumber={n} />

                    </div>
                    <div className="col-md-4"></div>
                </div>
                <div className='row'>
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                    {
                        answers.map((answers, i) => (
                            <Answers answer={answers} key = {i}/>
                        ))
                    }
                    </div>
                    <div className="col-md-3"></div>
                    

                </div>
                <div className='row text-center'>
                    <button className='btnc' onClick={this.handleNextQuestion}>Next >>></button>
                </div>

            </div>
        )
    }
}

export default MainDisplay
