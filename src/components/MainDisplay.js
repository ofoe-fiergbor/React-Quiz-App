import React, { Component } from 'react'
import HomeForm from './HomeForm'

export class MainDisplay extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-md-4">
                        <HomeForm/>
                    </div>
                    <div className="col-md-4"></div>
                </div>

            </div>
        )
    }
}

export default MainDisplay
