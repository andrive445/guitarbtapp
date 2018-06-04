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
              <Header />
              {this.props.children}
              <Footer />
          </div>
      );
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
        </Route>
    </Router>
    , document.getElementById('render-target'));
});