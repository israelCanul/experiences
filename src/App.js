import "./scss/app.scss";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import React, { Suspense } from "react";
import { useQuery } from "./hooks";
const Home = React.lazy(() => import("./pages/index"));
const TourRelated = React.lazy(() => import("./pages/tour_related"));

function App() {
  let query = useQuery();
  const checkForParams = () => {
    if (query != null) {
      if (!query.peopleID && !query.subscriberKey) {
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
      <div className="main_component">
        <Router>
          <Switch>
            <Route path={"/error_page"}>
              <MissingParams />
            </Route>
            <Route exact path={"/"}>
              {checkForParams()}
              <Suspense fallback={<div>Loading...</div>}>
                <Home />
              </Suspense>
            </Route>
            <Route exact path={"/tour_related"}>
              <Suspense fallback={<div>Loading...</div>}>
                <TourRelated />
              </Suspense>
            </Route>

            <Route component={NotFound} />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

const NotFound = () => {
  return (
    <div className="NotFound">
      <p>
        Not Found - <span>404</span>
      </p>
    </div>
  );
};
const MissingParams = () => {
  let query = useQuery();
  console.log(query);
  return (
    <div className="error_page">
      <p> Error: </p>
      {query ? <p>{query.error ? query.error : "Something was wrong"}</p> : ""}
    </div>
  );
};

export default App;
