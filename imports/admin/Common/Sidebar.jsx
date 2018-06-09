import React, { Component} from 'react';
import { Link } from 'react-router';

export default class Sidebar extends Component {
    render(){
        return(
            <div className="guitar-sidebar mb-3">
                <ul className="list-group">
                    <Link to="/dashboard" activeClassName="active" className="list-group-item list-group-item-action ">
                        Dashboard
                    </Link>
                    <Link to="/addNewGuitar" activeClassName="active" className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                        Guitars
                        <span className="badge badge-primary badge-pill">14</span>
                    </Link>
                    <Link to="/addAccessories" activeClassName="active" className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                        Accessories
                        <span className="badge badge-primary badge-pill">14</span>
                    </Link>
                    <Link to="" activeClassName="active" className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                        Straps
                        <span className="badge badge-primary badge-pill">14</span>
                    </Link>
                    <Link to="" activeClassName="active" className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                        Orders
                        <span className="badge badge-primary badge-pill">14</span>
                    </Link>
                   
                    <Link to="" activeClassName="active" className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                        Users
                        <span className="badge badge-primary badge-pill">14</span>
                    </Link>
                </ul>
            </div>
        );
    }
}