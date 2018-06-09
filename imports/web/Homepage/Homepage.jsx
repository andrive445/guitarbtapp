import React, { Component } from 'react';
import { Link } from 'react-router';
import { browserHistory } from 'react-router';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { Guitar } from '/imports/api/Guitar.js';
import Carousel from '/imports/web/Homepage/Carousel.jsx';

class Homepage extends Component {
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
              {
                this.props.guitarData ?
                  this.props.guitarData.map((data, index)=>{
                    return(
                      <div key={index} className="col-lg-3 col-md-4 col-sm-12 col-xs-12 mb-3">
                        <Link to={"/guitarDetails/" + data._id}>
                          <div className="guitar-box">
                            <div className="guitar-img">
                              <img src="/images/guitars/demo1.png" alt="" className="img-responsive"/>
                            </div>
                            <div className="guitar-price">
                              <h6 className="guitar-price-h6">
                                Rs. {data.guitarPrice}
                              </h6>
                            </div>
                            <div className="guitar-title">
                              <h6 className="guitar-title-h6">
                                {data.guitarName}
                              </h6>
                            </div>
                          </div>
                        </Link>
                      </div>
                    );
                  })
                  :
                  null
              }
              

             
              
            </div>
          </div>
          
        </div>
      </div>
    );
  }
}

export default withTracker((props)=>{
  var pubHandle = Meteor.subscribe('guitarpublish');
  var guitarData = Guitar.find({},{sort:{'createdAt':-1}}).fetch() || [];

  return {
      guitarData       : guitarData,
      pubHandle        : pubHandle.ready(),
  }
})(Homepage)