import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Support from './App';
import LifeCycle from './lifecycle/index'
import { HashRouter, Route } from 'react-router-dom';
import Test from './test'
import Mobile from './mobile/mobile.js'
import Contactus from './mobile/contactus.js'


// import * as serviceWorker from './serviceWorker';
class App extends React.Component {    
    render() {
      return (
        <HashRouter>
            <Route path='/' exact component={Support}></Route>
            <Route path='/index' exact component={Support}></Route>
            <Route path='/lifecycle' exact component={LifeCycle}></Route>
            <Route path='/test' exact component={Test}></Route>
            <Route path='/mobile' exact component={Mobile}></Route>
            <Route path='/contactus' exact component={Contactus}></Route>
        </HashRouter>
      )
    }
  }

ReactDOM.render(<App />, document.getElementById('root'));

// serviceWorker.unregister();
