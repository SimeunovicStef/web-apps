import React from 'react'
import { Link } from 'react-router-dom'

const Header = (props) => {
    return (<nav>
        <div className="nav-wrapper">
            <Link to='/' className="brand-logo"><i className="material-icons push"></i>Bit Person</Link>
            <ul className="right hide-on-med-and-down">

                <li><Link to="/about">About</Link></li>
            </ul>
        </div>
    </nav>)
}
export default Header