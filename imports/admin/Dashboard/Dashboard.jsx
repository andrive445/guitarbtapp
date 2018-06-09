import React, { Component } from 'react';

export default class Dashboard extends Component {
    render(){
        return(
            <div className="guitar-dashboard">
                <div className="card">
                    <h5 className="card-header dashboard-header">Dashboard</h5>
                    <div className="card-body">
                        <div className="row">
                            
                            <div className="col-lg-3 col-md-4 col-sm-12 col-xs-12">
                                <div className="card border-primary mb-3">
                                    <div className="card-header text-center">Users</div>
                                    <div className="card-body text-primary">
                                        <h5 className="card-title text-center">500</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-12 col-xs-12">
                                <div className="card border-primary mb-3">
                                    <div className="card-header text-center">BUY</div>
                                    <div className="card-body text-primary">
                                        <h5 className="card-title text-center">500</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-12 col-xs-12">
                                <div className="card border-primary mb-3">
                                    <div className="card-header text-center">Sale</div>
                                    <div className="card-body text-primary">
                                        <h5 className="card-title text-center">500</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-12 col-xs-12">
                                <div className="card border-primary mb-3">
                                    <div className="card-header text-center">Guitars</div>
                                    <div className="card-body text-primary">
                                        <h5 className="card-title text-center">500</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-12 col-xs-12">
                                <div className="card border-primary mb-3">
                                    <div className="card-header text-center">Straps</div>
                                    <div className="card-body text-primary">
                                        <h5 className="card-title text-center">500</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-12 col-xs-12">
                                <div className="card border-primary mb-3">
                                    <div className="card-header text-center">Accessories</div>
                                    <div className="card-body text-primary">
                                        <h5 className="card-title text-center">500</h5>
                                    </div>
                                </div>
                            </div>
                            
                            
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}