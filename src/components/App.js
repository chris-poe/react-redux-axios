import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './screens/Home';
import store from '../store';

const App = () => (
	<>
	  <Provider store={store}>
	    <BrowserRouter>
	      <Switch>
	        <Route path="/" component={Home} />
	      </Switch>
	    </BrowserRouter>
	  </Provider>
  </>
);

export default App;
