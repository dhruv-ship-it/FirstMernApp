import React , {Component}from "react";
import {Link} from "react-router-dom";

export default class NavBar extends Component {

    render(){
        return <nav className="navbar navbar -dark bg-dark navbar-expand-lg text-light">

            <Link to="/" className="navbar-brand text-light">Home</Link>

            <div className="collapse navbar-collapse">
                <ul className="navbar-nav">

                <li className="navbar-item mx-3"><Link to="/create" className="nav-link text-primary">Create Exercise Log</Link></li>
                <li className="navbar-item mx-3"><Link to="/user" className="nav-link text-primary">Create User</Link></li>

                </ul>
            </div>


        </nav>
    }
}
