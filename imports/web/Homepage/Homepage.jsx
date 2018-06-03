import React, { Component } from 'react';
 
import Carousel from '/imports/web/Homepage/Carousel.jsx';

export default class Homepage extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12 guitar-container">
            <Carousel />
          </div>
          <div className="col-lg-12">
            <div className="input-group mb-3 mt-5">
              <input type="text" className="form-control guitar-search" aria-label="Guitar Search" placeholder="Search Guitars Here..." />
              <div className="input-group-append">
                <span className="input-group-text">Search</span>
              </div>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="row guitar-container-box">
              <div className="col-lg-3 col-md-4 col-sm-12 col-xs-12 mb-3">
                <div className="guitar-box">
                  <div className="guitar-img">
                    <img src="/images/guitars/demo1.png" alt="" className="img-responsive"/>
                  </div>
                  <div className="guitar-price">
                    <h6 className="guitar-price-h6">
                      Rs. 4000
                    </h6>
                  </div>
                  <div className="guitar-title">
                    <h6 className="guitar-title-h6">
                      Lorem ipsum dolor sit amet.
                    </h6>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-12 col-xs-12 mb-3">
                <div className="guitar-box">
                  <div className="guitar-img">
                    <img src="/images/guitars/demo1.png" alt="" className="img-responsive"/>
                  </div>
                  <div className="guitar-price">
                    <h6 className="guitar-price-h6">
                      Rs. 4000
                    </h6>
                  </div>
                  <div className="guitar-title">
                    <h6 className="guitar-title-h6">
                      Lorem ipsum dolor sit amet.
                    </h6>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-12 col-xs-12 mb-3">
                <div className="guitar-box">
                  <div className="guitar-img">
                    <img src="/images/guitars/demo1.png" alt="" className="img-responsive"/>
                  </div>
                  <div className="guitar-price">
                    <h6 className="guitar-price-h6">
                      Rs. 4000
                    </h6>
                  </div>
                  <div className="guitar-title">
                    <h6 className="guitar-title-h6">
                      Lorem ipsum dolor sit amet.
                    </h6>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-12 col-xs-12 mb-3">
                <div className="guitar-box">
                  <div className="guitar-img">
                    <img src="/images/guitars/demo1.png" alt="" className="img-responsive"/>
                  </div>
                  <div className="guitar-price">
                    <h6 className="guitar-price-h6">
                      Rs. 4000
                    </h6>
                  </div>
                  <div className="guitar-title">
                    <h6 className="guitar-title-h6">
                      Lorem ipsum dolor sit amet.
                    </h6>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-12 col-xs-12 mb-3">
                <div className="guitar-box">
                  <div className="guitar-img">
                    <img src="/images/guitars/demo1.png" alt="" className="img-responsive"/>
                  </div>
                  <div className="guitar-price">
                    <h6 className="guitar-price-h6">
                      Rs. 4000
                    </h6>
                  </div>
                  <div className="guitar-title">
                    <h6 className="guitar-title-h6">
                      Lorem ipsum dolor sit amet.
                    </h6>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-12 col-xs-12 mb-3">
                <div className="guitar-box">
                  <div className="guitar-img">
                    <img src="/images/guitars/demo1.png" alt="" className="img-responsive"/>
                  </div>
                  <div className="guitar-price">
                    <h6 className="guitar-price-h6">
                      Rs. 4000
                    </h6>
                  </div>
                  <div className="guitar-title">
                    <h6 className="guitar-title-h6">
                      Lorem ipsum dolor sit amet.
                    </h6>
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