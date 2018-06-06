import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Cart extends Component{
    render(){
        return(
            <div className="guitar-cart-container container">
                {/* <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="guitar-cart-empty">
                            <Link to="/">
                                <img src="/images/empty-cart-icon.jpg" alt="Click to Shop" className="img-responsive cart-empty-img"/>
                            </Link>
                        </div>
                    </div>
                </div> */}
                <div className="row">
                    <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                        <div className="guitar-cart-table">
                            <div className="row guitar-cart-tablerow">
                                <div className="col-lg-3 text-center">
                                    Image
                                </div>
                                <div className="col-lg-5">
                                    Guitar Details
                                </div>
                                <div className="col-lg-2">
                                   Price
                                </div>
                                <div className="col-lg-2">
                                    
                                </div>
                            </div>

                            <div className="row carttablerow">
                                <div className="col-lg-3">
                                    <div className="guitar-cart-imgbox">
                                        <img src="/images/guitars/demo1.png" alt="" className="guitar-cart-img"/>
                                    </div>
                                </div>
                                <div className="col-lg-5">
                                    <div className="guitar-cart-d-name">Guitar Name: Guitar 120XD</div>
                                    <div className="guitar-cart-d-brand">Guitar Brand: Allen Solly</div>
                                    <div className="guitar-cart-d-type">Guitar Type: Electric</div>
                                    {/* <div className="guitar-cart-d-price">Price: Rs. 3000</div> */}
                                    <Link to="/" className="guitar-cart-d-view btn">View</Link>
                                </div>
                                <div className="col-lg-2">
                                    <div className="guitar-cart-d-price">
                                        Rs. 3000
                                    </div>
                                </div>
                                <div className="col-lg-2">
                                    <div className="btn guitar-cart-delete">
                                        Delete
                                    </div>
                                </div>
                            </div>
                            <div className="row carttablerow">
                                <div className="col-lg-3">
                                    <div className="guitar-cart-imgbox">
                                        <img src="/images/guitars/demo1.png" alt="" className="guitar-cart-img"/>
                                    </div>
                                </div>
                                <div className="col-lg-5">
                                    <div className="guitar-cart-d-name">Guitar Name: Guitar 120XD</div>
                                    <div className="guitar-cart-d-brand">Guitar Brand: Allen Solly</div>
                                    <div className="guitar-cart-d-type">Guitar Type: Electric</div>
                                    {/* <div className="guitar-cart-d-price">Price: Rs. 3000</div> */}
                                    <Link to="/" className="guitar-cart-d-view btn">View</Link>
                                </div>
                                <div className="col-lg-2">
                                    <div className="guitar-cart-d-price">
                                        Rs. 3000
                                    </div>
                                </div>
                                <div className="col-lg-2">
                                    <div className="btn guitar-cart-delete">
                                        Delete
                                    </div>
                                </div>
                            </div>
                            <div className="row carttablerow">
                                <div className="col-lg-3">
                                    <div className="guitar-cart-imgbox">
                                        <img src="/images/guitars/demo1.png" alt="" className="guitar-cart-img"/>
                                    </div>
                                </div>
                                <div className="col-lg-5">
                                    <div className="guitar-cart-d-name">Guitar Name: Guitar 120XD</div>
                                    <div className="guitar-cart-d-brand">Guitar Brand: Allen Solly</div>
                                    <div className="guitar-cart-d-type">Guitar Type: Electric</div>
                                    {/* <div className="guitar-cart-d-price">Price: Rs. 3000</div> */}
                                    <Link to="/" className="guitar-cart-d-view btn">View</Link>
                                </div>
                                <div className="col-lg-2">
                                    <div className="guitar-cart-d-price">
                                        Rs. 3000
                                    </div>
                                </div>
                                <div className="col-lg-2">
                                    <div className="btn guitar-cart-delete">
                                        Delete
                                    </div>
                                </div>
                            </div>
                            <div className="row carttablerow">
                                <div className="col-lg-3">
                                    <div className="guitar-cart-imgbox">
                                        <img src="/images/guitars/demo1.png" alt="" className="guitar-cart-img"/>
                                    </div>
                                </div>
                                <div className="col-lg-5">
                                    <div className="guitar-cart-d-name">Guitar Name: Guitar 120XD</div>
                                    <div className="guitar-cart-d-brand">Guitar Brand: Allen Solly</div>
                                    <div className="guitar-cart-d-type">Guitar Type: Electric</div>
                                    {/* <div className="guitar-cart-d-price">Price: Rs. 3000</div> */}
                                    <Link to="/" className="guitar-cart-d-view btn">View</Link>
                                </div>
                                <div className="col-lg-2">
                                    <div className="guitar-cart-d-price">
                                        Rs. 3000
                                    </div>
                                </div>
                                <div className="col-lg-2">
                                    <div className="btn guitar-cart-delete">
                                        Delete
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                        <div className="cart-total-billed">
                            <div className="cart-bill-summery">
                                Order Summery
                            </div>
                            <div className="cart-totalitems clearfix">
                                <div className="totalitems-title float-left">Items in Cart</div>
                                <div className="totalitems-value float-right">3</div>
                            </div>
                            <div className="cart-subtotal clearfix">
                                <div className="cart-subtotal-title float-left">Subtotal</div>
                                <div className="cart-subtotal-value float-right">Rs. 3000</div>
                            </div>
                            <div className="cart-gst clearfix">
                                <div className="cart-gst-title float-left">GST</div>
                                <div className="cart-gst-value float-right">26%</div>
                            </div>
                            <hr />
                            <div className="cart-estimate-total clearfix">
                                <div className="cart-est-title float-left">Estimate Total</div>
                                <div className="cart-est-value float-right">Rs. 3300</div>
                            </div>

                            <div className="place-order btn">
                                Place Order
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}