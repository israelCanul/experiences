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
const Summary = React.lazy(() => import("./pages/summary"));
const Confirmation = React.lazy(() => import("./pages/confirmation"));

function App() {
  let query = useQuery();
  const checkForParams = () => {
    if (query != null) {
      if (
        !query.contactID &&
        !query.peopleID &&
        !query.stayID &&
        !query.resID &&
        !query.checkInDate &&
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
  // const checkCookies = () => {
  //   if (!checkForCookies()) {
  //     return (
  //       <Route>
  //         <Redirect
  //           to={{
  //             pathname: "/error_page/?error=missing params",
  //           }}
  //         />
  //       </Route>
  //     );
  //   }
  // };

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path={"/error_page"}>
            <div className="main_component">
              <MissingParams />
            </div>
          </Route>

          <Route exact path={"/"}>
            {checkForParams()}
            <div className="main_component fullscreen">
              <Suspense fallback={<div>Loading...</div>}>
                <Home params={query} />
              </Suspense>
            </div>
          </Route>
          <Route exact path={"/tour_related"}>
            <div className="main_component">
              <Suspense fallback={<div>Loading...</div>}>
                <TourRelated />
              </Suspense>
            </div>
          </Route>
          <Route exact path={"/tour_summary"}>
            <div className="main_component">
              <Suspense fallback={<div>Loading...</div>}>
                <Summary />
              </Suspense>
            </div>
          </Route>
          <Route exact path={"/confirmation"}>
            <div className="main_component fullscreen">
              <Suspense fallback={<div>Loading...</div>}>
                <Confirmation />
              </Suspense>
            </div>
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
          Not Found - <span>404</span>
        </p>
      </div>
    </div>
  );
};
const MissingParams = () => {
  let query = useQuery();
  console.log(query);
  return (
    <div className="main_component">
      <div className="error_page">
        <p> Error: </p>
        {query ? (
          <p>{query.error ? query.error : "Something was wrong"}</p>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default App;
