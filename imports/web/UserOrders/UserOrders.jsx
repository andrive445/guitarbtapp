import React, { Component } from 'react';

export default class UserOrders extends Component {
    render(){
        return (
            <div className="guitar-u-orders container">
                <h2 className="guitar-uo-title text-center">
                    List of All Orders you have placed
                </h2>
                <table className="table table-responsive-sm table-responsive-xs table-striped table-hover">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col"></th>
                            <th scope="col">Order Number</th>
                            <th scope="col">Products</th>
                            <th scope="col">Total(Rs.)</th>
                            <th scope="col">Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>AD56GbHIkOLFGH</td>
                            <td>
                                <div className="guitar-uo-list">
                                    Products
                                </div>
                            </td>
                            <td>3000</td>
                            <td className="text-center">
                                <div className="guitar-uo-detailbtn btn">View</div>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">1</th>
                            <td>AD56GbHIkOLFGH</td>
                            <td>
                                <div className="guitar-uo-list">
                                    Products
                                </div>
                            </td>
                            <td>3000</td>
                            <td className="text-center">
                                <div className="guitar-uo-detailbtn btn">View</div>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">1</th>
                            <td>AD56GbHIkOLFGH</td>
                            <td>
                                <div className="guitar-uo-list">
                                    Products
                                </div>
                            </td>
                            <td>3000</td>
                            <td className="text-center">
                                <div className="guitar-uo-detailbtn btn">View</div>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">1</th>
                            <td>AD56GbHIkOLFGH</td>
                            <td>
                                <div className="guitar-uo-list">
                                    Products
                                </div>
                            </td>
                            <td>3000</td>
                            <td className="text-center">
                                <div className="guitar-uo-detailbtn btn">View</div>
                            </td>
                        </tr>
                        
                        
                    </tbody>
                </table>
            </div>
        );
    }
}