import React from 'react';
import { Link } from 'react-router-dom'
function Navbar() {
    return(
        <nav>
        <div className="nav-wrapper">
          <Link to="/home" className="brand-logo left"><i className="material-icons">cloud</i>SS Games</Link>
          <ul className="right ">
            <li><Link to="/games"><i className="material-icons">search</i></Link></li>
            <li><Link to="/setting"><i className="material-icons">view_module</i></Link></li>
            <li><Link to="/reset"><i className="material-icons">refresh</i></Link></li>
            <li><Link to="/"><i className="material-icons">more_vert</i></Link></li>
          </ul>
        </div>
      </nav>
    )
}
export default Navbar