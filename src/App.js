import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from "react-router-dom";


import Navigation from "./components/navigation";
import Home from './components/home';
import OurWork from './components/work';
import MeetTheDocs from './components/meetTheDocs';
import StormDamage from './components/stormDamage';
import FreeEstimate from './components/freeEstimate';
import Footer from './components/footer';
import MobileApps from './components/mobileApps';
import DevMobileApps from './components/devMobileApps';
import ContractorApps from './components/contractorApps';
import NotFound from './components/notFound';
import PrivacyPolicy from './components/privacyPolicy';
import EULA from './components/eula';
import FAQs from './components/faqs';


class App extends Component {


  render() {
    return (

        <BrowserRouter>
            <div className="App">
                <Navigation />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/work" component={OurWork} />
                        <Route path="/docs" component={MeetTheDocs} />
                        <Route path="/damage" component={StormDamage} />
                        <Route path="/faqs" component={FAQs} />
                        <Route path="/inspection" component={FreeEstimate} />
                        <Route path="/privacy" component={PrivacyPolicy} />
                        <Route path="/eula" component={EULA} />
                        <Route path="/downloads/apps/dev" component={DevMobileApps} />
                        <Route path="/downloads/apps" component={MobileApps} />
                        <Route path="/contractors/apps" component={ContractorApps} />
                        <Route component={NotFound} />
                    </Switch>
                <Footer />
            </div>
        </BrowserRouter>
    );
  }
}

export default App;
