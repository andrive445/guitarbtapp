import React, { Component } from 'react';

export default class AdminHeader extends Component {
    render(){
        return (
            <nav className="navbar navbar-expand-lg navbar-light giutar-admin-nav shadow">
                <div className="container">
                    <a className="navbar-brand" href="#">GuitarRist Admin</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon text-white"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link text-white" href="#">Dashboard</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#">Guitars</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#">Accessories</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#">Straps</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#">Orders</a>
                            </li>
                        </ul>
                        <span className="navbar-text text-white guitar-admin-username">
                            Wecome, Admin
                        </span>
                        <span className="navbar-text text-white guitar-admin-logout">
                            Logout
                        </span>
                    </div>
                </div>
            </nav>
        )
    }
}