import React, {Component} from 'react';
import 'w3-css';

class BasicInformation extends Component{

    render(){

        return(
                <div className="w3-border w3-border-deep-purple w3-hover-border-teal w3-hover-deep-purple w3-topbar w3-leftbar w3-rightbar w3-bottombar w3-teal">
                    <h2 style={{fontFamily: "Anton"}} className="w3-wide w3-margin">{this.props.rink.name}</h2>
                    {/* <div>
                        {this.props.rink.location.address}<br />
                        {this.props.rink.location.city},&nbsp;{this.props.rink.location.postalCode}
                    </div>
                    <span>
                        {this.props.rink.phone}
                    </span> */}
                </div>
        )
    }
}

export default BasicInformation;