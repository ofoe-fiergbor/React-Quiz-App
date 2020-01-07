import React, { Component } from 'react'
import NavBar from './NavBar'
import MainDisplay from './MainDisplay'
import Footer from './Footer'

class QuizeBoard extends Component {

    render() {
        return (
            <div>
                <NavBar/>
                <MainDisplay/>
                <Footer/>
            </div>
        )
    }
}

export default QuizeBoard
