import React, { Component } from 'react';
import 'w3-css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBirthdayCake } from '@fortawesome/free-solid-svg-icons'
library.add(faBirthdayCake);

class PartyInformation extends Component {

    render() {
        let rinkPartyInformation = this.props.parties.map(party => {
            let availableTimes = party.availablePartyTimes.map(times => {
                let timesList = [];
                Object.keys(times).forEach(function (element) {
                    timesList.push(<li>{element}: {times[element]} <br /></li>)
                })
                return (timesList)
            })
            return (
                <td>
                    <ul className="w3-ul w3-border w3-deep-purple">
                        <li><h2>{party.type}</h2></li>
                        <li>
                            {party.guestLimit}&nbsp;guests.
                                            </li>
                        {availableTimes}
                        <li>
                            <div>
                                Full Price(Deposit included): <b>${party.price}</b>
                            </div>
                            <div>
                                Deposit: <b>${party.deposit}</b>
                            </div>
                        </li>
                    </ul>
                </td>
            )
        })
        return (
            <span>
                {rinkPartyInformation}
            </span>
        )
    }
}

export default PartyInformation;