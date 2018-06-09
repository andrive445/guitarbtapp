import React, { Component } from 'react';
import { Link } from 'react-router';
import { browserHistory } from 'react-router';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { Strap } from '/imports/api/Strap.js';
import { Accessory } from '/imports/api/Accessory.js';

class AccessoriesBox extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="row accessr-row">
                {
                    this.props.pubHandleReady ?
                        this.props.allAccessories.map((data, index)=>{
                            return(
                                <div key={index} className="col-lg-3 col-md-4 col-sm-12 col-xs-12 accessr-col">
                                    <div className="accessr-box">
                                        <div className="accessr-img">
                                            <img src={data.baseType == "strap" ? "/images/straps/demo1.png" : "/images/accessories/demo1.png"} alt="" className="accessr-imgin"/>
                                        </div>
                                        <div className="accessr-detail">
                                            <div className="accessr-price">Rs {data.baseType == "strap" ? data.strapPrice : data.accessoryPrice}</div>
                                            {
                                                data.baseType == "strap" ?
                                                    <div className="accessr-size pull-right">
                                                        Select Size
                                                        <div title="Small Size" className="accessr-small">S</div>
                                                        <div title="Medium Size" className="accessr-med">M</div>
                                                        <div title="Large Size" className="accessr-large">L</div>
                                                    </div>
                                                    :
                                                    null
                                            }
                                            <div className="accessr-text">{data.baseType == "strap" ? data.strapName : data.accessoryName}</div>
                                            <div className="accessr-buy">BUY</div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    :
                    null
                }
            </div>   
        );
    }
}

export default withTracker((props)=>{
    var pubHandle1 = Meteor.subscribe('accessorypublish');
    var pubHandle2 = Meteor.subscribe('strappublish');

    var accessoryData = Accessory.find({}).fetch() || [];
    var strapData = Strap.find({}).fetch() || [];
    var allAccessories = [...strapData, ...accessoryData];

    return {
        allAccessories  :   allAccessories,
        pubHandleReady  :   pubHandle1.ready() && pubHandle2.ready(),
    }
})(AccessoriesBox);