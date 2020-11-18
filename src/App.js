import React from 'react';
import './App.scss';
import { Switch, Route } from "react-router-dom";
import Home from './containers/Home/Home'
import AboutPage from './containers/About/AboutPage'
import ServicesPage from './containers/ServicesPage/ServicesPage'
import LookBookPage from './containers/LookBookPage/LookBookPage';
import ContactPage from './containers/ContactPage/ContactPage'
import BookingPage from './containers/BookingPage/BookingPage';
// import 'mapbox-gl/dist/mapbox-gl.css';`





function App() {
 



  return (
    <div className="App">

      <Switch>
        <Route exact path="/about" component={AboutPage}/>
        <Route exact path="/services" component={ServicesPage}/>
        <Route exact path="/lookbook" component={LookBookPage}/>
        <Route exact path="/contact" component={ContactPage}/>
        <Route exact path="/" component={Home}/>
        <Route exact path="/book-appointment" component={BookingPage}/>
        {/* <Route path="*" component={()=> "404 Page Not Found"}/> */}
      </Switch>

    </div>
  );
}

export default App;
