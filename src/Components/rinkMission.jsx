import React, { Component } from 'react'

class MissionStatement extends Component{
    render(){
        return(
            <div className="w3-row-padding w3-padding-64 w3-blue">
                <div className="w3-center">
                    <h2>Our Mission</h2>
                    <h3>{this.props.mission}</h3>
                </div>
            </div>
        )
    }
}

export default MissionStatement;