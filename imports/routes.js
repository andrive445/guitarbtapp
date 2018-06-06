import { Meteor } from 'meteor/meteor';
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

// ******************************** Import Other Component ******************************
import Header from '/imports/web/Common/Header.jsx';
import Footer from '/imports/web/Common/Footer.jsx';
import Homepage from '/imports/web/Homepage/Homepage.jsx';
import AboutUs from '/imports/web/AboutUs/AboutUs.jsx';
import Accessories from '/imports/web/Accessories/Accessories.jsx';
import GuitarDetails from '/imports/web/GuitarDetails/GuitarDetails.jsx';
import Cart from '/imports/web/Cart/Cart.jsx';
import UserOrders from '/imports/web/UserOrders/UserOrders.jsx';

import AdminHeader from '/imports/admin/Common/AdminHeader.jsx';
import AdminFooter from '/imports/admin/Common/AdminFooter.jsx';
import Sidebar from '/imports/admin/Common/Sidebar.jsx';
import Dashboard from '/imports/admin/Dashboard/Dashboard.jsx';


// ******************************* Component To Render Start ****************************
class Website extends React.Component{
    render(){
        return(
            <div>
                <Header />
                {this.props.children}
                <Footer />
            </div>
        );
    }
}

class AdminWebsite extends React.Component{
  render(){
      return(
          <div>
                <AdminHeader />
                <div className="container admin-wrapper">
                    <div className="row">
                        <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12" >
                            <Sidebar />
                        </div>
                        <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12" >
                            {this.props.children}
                        </div>
                    </div>
                </div>
              <AdminFooter />
          </div>
      );
  }
}


checkPageAuth = ()=>{
    var userId = Meteor.userId();
    if(!userId){
        console.log("Aunuathorised page");
    }
}
// ************************************ Add Routes **************************************
Meteor.startup(() => {
  render(
    <Router history={browserHistory}>
        {/* <Route path='/' component = {Homepage} /> */}
        <Route path="/" component={Website}>
            <IndexRoute component = {Homepage} />
            <Route path='/about' component = {AboutUs} />
            <Route path='/accessories' component = {Accessories} />
            <Route path='/guitarDetails' component = {GuitarDetails} />
            <Route path="/cart" component = {Cart} onEnter={this.checkPageAuth()} />
            <Route path="/userOrders" component = {UserOrders} />
        </Route>
        <Route path='/' component = { AdminWebsite}>
            <Route path="/dashboard" component = {Dashboard} />
        </Route>
    </Router>
    , document.getElementById('render-target'));
});