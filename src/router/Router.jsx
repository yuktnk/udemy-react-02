import { Switch, Route } from "react-router-dom";

import { Home } from "../Home";
import { Page02 } from "../Page02";
import { Page01Routes } from "./Page01Routes";

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
      <Route path="/page02">
        <Page02 />
      </Route>
    </Switch>
  );
};
