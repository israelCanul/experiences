import "./scss/app.scss";
import { Router, Switch, Route, Redirect } from "react-router-dom";
import React, { Suspense } from "react";
import { useQuery } from "./hooks";
import { createBrowserHistory } from "history";
import Page from "./pages/page.js";
import { getTexto } from "./libs/language";
const Home = React.lazy(() => import("./pages/index"));
const TourRelated = React.lazy(() => import("./pages/tour_related"));
const Summary = React.lazy(() => import("./pages/summary"));
const Confirmation = React.lazy(() => import("./pages/confirmation"));
const Especialevents = React.lazy(() => import("./pages/especialevents"));

const history = createBrowserHistory();

function App() {
  let query = useQuery();
  const checkForParams = () => {
    if (query != null) {
      if (
        !query.contactID ||
        !query.peopleID ||
        !query.stayID ||
        !query.resID ||
        !query.checkInDate ||
        !query.resort
      ) {
        return (
          <Route>
            <Redirect
              to={{
                pathname: "/error_page/?error=missing params",
              }}
            />
          </Route>
        );
      }
    }
  };

  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <Route path={"/error_page"}>
            <div className="main_component">
              <MissingParams />
            </div>
          </Route>
          <Route exact path={"/"}>
            {checkForParams()}
            <Page title="Experiences">
              <div className="main_component fullscreen">
                <Suspense fallback={<div>Loading...</div>}>
                  <Home params={query} />
                </Suspense>
              </div>
            </Page>
          </Route>
          <Route exact path={"/experiences"}>
            <Page title="Tours List">
              <div className="main_component">
                <Suspense fallback={<div>Loading...</div>}>
                  <TourRelated />
                </Suspense>
              </div>
            </Page>
          </Route>
          <Route exact path={"/summary"}>
            <Page title="Summary">
              <div className="main_component">
                <Suspense fallback={<div>{getTexto("Loading")}...</div>}>
                  <Summary />
                </Suspense>
              </div>
            </Page>
          </Route>
          <Route exact path={"/confirmation"}>
            <Page title="Confirmation">
              <div className="main_component fullscreen">
                <Suspense fallback={<div>{getTexto("Loading")}...</div>}>
                  <Confirmation />
                </Suspense>
              </div>
            </Page>
          </Route>
          <Route exact path={"/special-events"}>
            <Page title="Especial Events">
              <div className="main_component">
                <Suspense fallback={<div>{getTexto("Loading")}...</div>}>
                  <Especialevents />
                </Suspense>
              </div>
            </Page>
          </Route>
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

const NotFound = () => {
  return (
    <div className="main_component">
      <div className="NotFound">
        <p>
          {getTexto("Not Found")} - <span>404</span>
        </p>
      </div>
    </div>
  );
};
const MissingParams = () => {
  let query = useQuery();
  return (
    <div className="main_component">
      <div className="error_page">
        <p> Error: </p>
        {query ? (
          <p>{query.error ? query.error : getTexto("Something was wrong")}</p>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default App;
