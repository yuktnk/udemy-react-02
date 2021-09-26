import { Switch, Route } from "react-router-dom";

import { Home } from "../Home";
import { Page01Routes } from "./Page01Routes";
import { Page02Routes } from "./Page02Routes";

export const Router = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route
        path="/page01"
        render={({ match: { url } }) => (
          <Switch>
            {Page01Routes.map((route) => (
              <Route
                key={route.path}
                exact={route.exact}
                path={`${url}${route.path}`}
              >
                {route.children}
              </Route>
            ))}
          </Switch>
        )}
      />
      <Route
        path="/page02"
        render={({ match: { url } }) => (
          <Switch>
            {Page02Routes.map((route) => (
              <Route
                key={route.path}
                exact={route.exact}
                path={`${url}${route.path}`}
              >
                {route.children}
              </Route>
            ))}
          </Switch>
        )}
      />
    </Switch>
  );
};
