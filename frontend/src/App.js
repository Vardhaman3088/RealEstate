import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './containers/Home';
import About from './containers/About';
import Contact from './containers/Contact';
import Listings from './containers/Listings';
import ListingDetail from './containers/ListingDetails';
import SignUp from './containers/SignUp';
import Login from './containers/LogIn';
import Layout from './hocs/Layout'
import NotFound  from './components/NotFound';
import './sass/main.scss'
// import privateRoute from './components/privateRoute';

import { Provider } from 'react-redux';
import store from './store';
import PrivateRoute from './components/privateRoute';


const App = () => (
  <Provider store={store}>
  <Router>
      <Layout>
        {/* {Home} */}
        <Switch>
          <Route exact path ='/' component={Home} />
          <Route exact path ='/about' component={About} />
          <Route exact path ='/contact' component={Contact} />
          <Route exact path ='/listings' component={Listings} />
          <PrivateRoute exact path ='/listings/:id' component={ListingDetail} />
          <Route exact path ='/login' component={Login} />
          <Route exact path ='/signup' component={SignUp} />
          <Route component={NotFound} />

        </Switch>
      </Layout>
  </Router>
  </Provider>
);

export default App;
