import React, { Component} from 'react';

export default class Sidebar extends Component {
    render(){
        return(
            <div className="guitar-sidebar">
                <ul className="list-group">
                    <li className="list-group-item list-group-item-action active">
                        Dashboard
                    </li>
                    <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                        Guitars
                        <span className="badge badge-primary badge-pill">14</span>
                    </li>
                    <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                        Accessories
                        <span className="badge badge-primary badge-pill">14</span>
                    </li>
                    <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                        Straps
                        <span className="badge badge-primary badge-pill">14</span>
                    </li>
                    <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                        Orders
                        <span className="badge badge-primary badge-pill">14</span>
                    </li>
                    <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                        Guitars
                        <span className="badge badge-primary badge-pill">14</span>
                    </li>
                    <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                        Users
                        <span className="badge badge-primary badge-pill">14</span>
                    </li>
                </ul>
            </div>
        );
    }
}