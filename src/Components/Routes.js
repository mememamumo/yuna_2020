import React, { Suspense, lazy } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

const Home = lazy(() => import("../Routes/Home"));
const About = lazy(() => import("../Routes/About"));
const Project = lazy(() => import("../Routes/Project"));
const Contact = lazy(() => import("../Routes/Contact"));

const renderLoader = () => <div>Loading...</div>;

const AppRouter = () => (
  <Router>
    <Suspense fallback={renderLoader()}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/project" component={Project} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </Suspense>
  </Router>
);

export default AppRouter;
