import React, { Component } from 'react';

export default class AddNewGuitar extends Component {
    render(){
        return(
            <div className="guitar-dashboard">
                <div className="card">
                    <h5 className="card-header addNewGuitar-header">Add New Guitar</h5>
                    <div className="card-body">
                        <form>
                            <div className="row">
                                <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                    <div className="form-group">
                                        <label htmlFor="guitarName">Guitar Name</label>
                                        <input type="text" className="form-control" id="guitarName" placeholder="Guitar Name" />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                    <div className="form-group">
                                        <label htmlFor="guitarBrand">Guitar Brand</label>
                                        <input type="text" className="form-control" id="guitarBrand" placeholder="Guitar Brand" />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                    <div className="form-group">
                                        <label htmlFor="guitarSerialNumber">Guitar Serial Number</label>
                                        <input type="text" className="form-control" id="guitarSerialNumber" placeholder="Guitar Serial Number" />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                    <div className="form-group">
                                        <label htmlFor="guitarType">Guitar Type</label>
                                        <select className="form-control" id="guitarType">
                                            <option>Acoustic</option>
                                            <option>Electric</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                    <div className="form-group">
                                        <label htmlFor="guitarNoOfStrings">Number of Strings</label>
                                        <select className="form-control" id="guitarNoOfStrings">
                                            <option>4</option>
                                            <option>6</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                    <div className="form-group">
                                        <label htmlFor="guitarPrice">Price</label>
                                        <input type="number" className="form-control" id="guitarPrice" placeholder="Price" />
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div className="form-group">
                                        <label htmlFor="guitarInformation">Guitar Information</label>
                                        <textarea className="form-control" id="guitarInformation" rows="3" placeholder="Guitar Information"></textarea>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div className="form-group">
                                        <input type="submit" className="btn btn-success" value="Add New Guitar" />
                                        <div className="btn btn-danger ml-3 addNewGuitarCancel">Cancel</div>
                                    </div>
                                </div>
                            </div> 
                        </form>
                    </div>
                </div>

                 <div className="card">
                    <h5 className="card-header addNewGuitar-header">List of Guitar</h5>
                    <div className="card-body">
                        <div className="guitar-u-orders container">
                            
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
                    </div>
                </div>
            </div>
        )
    }
}