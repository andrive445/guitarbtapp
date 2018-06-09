import React, { Component } from 'react';
import AccessoriesBox from '/imports/web/Accessories/AccessoriesBox.jsx';
import { Link } from 'react-router';
import { browserHistory } from 'react-router';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { Guitar } from '/imports/api/Guitar.js';

// $(window).scroll(function() {
//     if($(window).scrollTop() + $(window).height() == $(document).height()) {
//         alert("bottom!"+$(document).height());
//     }
//  });
 
class GuitarDetails extends Component {
    constructor(props){
        super(props);
    }
    componentWillMount(){
        window.scrollTo(0, 0);
    }

    render(){
        return(
            <div className="guitar-details-container container-fluid">
                <h1 className="details text-center">
                    {this.props.pubHandle ? this.props.guitarData.guitarName : null} Guitar Details
                </h1>
                {
                    this.props.pubHandle ? 
                        <div className="row guitar-detail-row">
                            <div className="col-lg-3 col-md-4 col-sm-12 col-xs-12 guitar-detail-col">
                                <div className="guitar-detail-box1">
                                    <div className="guitar-detail-img">
                                        <img src="/images/guitars/demo1.png" alt="" className="guitar-detail-imgin"/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-9 col-md-8 col-sm-12 col-xs-12 guitar-detail-col">
                                <div className="guitar-detail-box2">
                                    <div className="guitar-d-con">
                                        <div className="guitar-d-name">Guitar Name: {this.props.guitarData.guitarName}</div>
                                        <div className="guitar-d-brand">Guitar Brand: {this.props.guitarData.guitarBrand}</div>
                                        <div className="guitar-d-type">Guitar Type: {this.props.guitarData.guitarType}</div>
                                        <div className="guitar-d-numberStr">Number of Strings: {this.props.guitarData.guitarNoOfStrings}</div>
                                        <div className="guitar-d-price">Price: Rs. {this.props.guitarData.guitarPrice}</div>
                                        <div className="guitar-d-serialNo">Serial Number: {this.props.guitarData.guitarSerialNumber}</div>
                                        <div className="guitar-d-availabilty">Availability: 
                                            {
                                                this.props.guitarData.status == "unsold" ?
                                                    <span className="guitar-ava-span">Available</span>
                                                    :
                                                    <span className="guitar-noava-span">Sold</span>
                                            }
                                            
                                        </div>
                                        {
                                            this.props.guitarData.status == "unsold" ?
                                                <div className="guitar-d-buy">BUY NOW</div>
                                                :
                                                null
                                        }
                                    </div>
                                    <div className="guitar-d-info">{this.props.guitarData.guitarInformation}</div>
                                </div>
                            </div>
                        </div>
                        :
                        null
                }
                
                <div className="row guitar-detail-row">
                    <div className="col-lg-12">
                        <h4 className="text-center guitar-d-relatedaccr">BUY Related Accessories with Guitar</h4>
                    </div>
                </div>
                <AccessoriesBox />
                
            </div>    
        );
    }
}

export default withTracker((props)=>{
    var id = props.params.id;
    var pubHandle = Meteor.subscribe('guitarpublishUnique',id);
    var guitarData = Guitar.findOne({"_id":id});

    return {
        guitarData       : guitarData,
        pubHandle        : pubHandle.ready(),
    } 
})(GuitarDetails);