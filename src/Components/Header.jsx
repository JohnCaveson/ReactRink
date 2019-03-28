import React from 'react'
import { Link } from 'react-router-dom'

const Header = () =>
  (
    <div className="w3-bar w3-indigo w3-top">
      <ul className="w3-ul">
        <li className="w3-bar-item w3-button w3-mobile" aria-label={"This says dookie"}><Link style={{textDecoration: "none"}}to="/">Johnson City Family Skate Center</Link></li>
        <li className="w3-bar-item w3-button w3-mobile" aria-label={"This says dookie"}><Link style={{textDecoration: "none"}}to="/parties">Parties</Link></li>
        <li className="w3-bar-item w3-button w3-mobile" aria-label={"This says dookie"}><Link to="/FAQ">FAQ</Link></li>
        <li className="w3-bar-item w3-button w3-mobile" aria-label={"This says dookie"}>Schedule</li>
      </ul>
    </div>
  )

export default Header