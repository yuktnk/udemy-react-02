import { BrowserRouter, Link, Switch, Route } from "react-router-dom";

import { Home } from "./Home";
import { Page01 } from "./Page01";
import { Page01DetailA } from "./Page01DetailA";
import { Page01DetailB } from "./Page01DetailB";
import { Page02 } from "./Page02";
import "./styles.css";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Link to="/">Home</Link>
        <br />
        <Link to="/page01">Page01</Link>
        <br />
        <Link to="/page02">Page02</Link>
        {/* <Home />
        <Page02 /> */}
      </div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route
          path="/page01"
          render={({ match: { url } }) => (
            <Switch>
              <Route exact path={url}>
                <Page01 />
              </Route>
              <Route exact path={`${url}/detailA`}>
                <Page01DetailA />
              </Route>
              <Route exact path={`${url}/detailB`}>
                <Page01DetailB />
              </Route>
            </Switch>
          )}
        />
        <Route path="/page02">
          <Page02 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
