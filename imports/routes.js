import { Meteor } from 'meteor/meteor';
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

// ***********************************************************************************
// ******************************** Import Other Component ******************************
// ***********************************************************************************
import Header from '/imports/web/Common/Header.jsx';
import Footer from '/imports/web/Common/Footer.jsx';
import Homepage from '/imports/web/Homepage/Homepage.jsx';
// import AddNewGuitar from '/imports/admin/AddNewGuitar/AddNewGuitar.jsx';


// // ***********************************************************************************
// // ******************************* Component To Render Start *************************
// // ***********************************************************************************
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


// // ***********************************************************************************
// // ************************************ Add Routes ***********************************
// // ***********************************************************************************
Meteor.startup(() => {
  render(
    <Router history={browserHistory}>
        {/* <Route path='/' component = {Homepage} /> */}
        <Route component={Website}>
            <Route path='/' component = {Homepage} />
            {/* <Route path='/b' component = {AddNewGuitar} /> */}
        </Route>
    </Router>
    , document.getElementById('render-target'));
});