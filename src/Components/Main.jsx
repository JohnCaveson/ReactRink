import React from 'react'
import { Switch, Route } from 'react-router-dom'
import PDF from "react-pdf-js";
import file  from "../Documents/FAQ.pdf";
import PartyInformation from './rinkParties'
import BasicInformation from './rinkBasics';


const Main = (props) => (

    <main>
        <Switch>
            <Route exact path="/" render={() => <span>
                <BasicInformation rink={props.rink.basics} /> </span>} />
            <Route path="/parties" render={() => <span><h1>Parties</h1> <table className="w3-table w3-centered w3-card"> <tbody><tr>
                <PartyInformation parties={props.rink.parties} /></tr> </tbody>
            </table></span>} />
            <Route path="" render={() => <div>
                <PDF file={{src: file}}/>
            </div>} />
        </Switch>
    </main>
)

export default Main