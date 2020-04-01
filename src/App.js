import React from 'react';
import { Provider } from 'react-redux';
import Home from './components/Home.tsx';
import Page from './components/Page.tsx';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { StaticRouter } from 'react-router';

import './App.css';

const NoMatch = () => (
    <div>
      <h1>404</h1>
      React Page Not Found
    </div>
);

const AppRoutes = ({ store }) => (
    <Switch>
      <Route path="/" component={Home} exact />
      {/* <Route path="/page" component={Page} exact /> */}
      <Route path="/page" render={() => {
        return <Page />;
      }} exact />
      <Route render={NoMatch} />
    </Switch>
)

function App (props) {
  return (
      <Provider store={props.store}>
        {
          props.location
              ? (
                  <StaticRouter location={props.location} context={{}}>
                    <AppRoutes store={props.store}/>
                  </StaticRouter>
              ) : (
                  <BrowserRouter>
                    <AppRoutes/>
                  </BrowserRouter>
              )
        }
      </Provider>
  );
}
export default App;
