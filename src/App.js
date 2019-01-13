import React, { Component } from 'react';
import { Route, BrowserRouter} from "react-router-dom";


import Navigation from "./components/navigation";
import Home from './components/home';
import OurWork from './components/work';
import MeetTheDocs from './components/meetTheDocs';
import StormDamage from './components/stormDamage';
import FreeEstimate from './components/freeEstimate';
import Footer from './components/footer';


import './style/components/navigation.css';



class App extends Component {


  render() {
    return (

        <BrowserRouter>
            <div className="App">
                <Navigation/>
                <div className="content">
                    <Route exact path="/" component={Home} />
                    <Route path="/work" component={OurWork} />
                    <Route path="/docs" component={MeetTheDocs} />
                    <Route path="/damage" component={StormDamage} />
                    <Route path="/estimate" component={FreeEstimate} />
                </div>
                <Footer />
            </div>
        </BrowserRouter>
    );
  }
}

export default App;
