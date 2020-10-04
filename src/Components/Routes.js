import React, { Suspense, lazy } from "react";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import Loader from "./Loader";

const Home = lazy(() => import("../Routes/Home"));
const About = lazy(() => import("../Routes/About"));
const Project = lazy(() => import("../Routes/Project"));
const Contact = lazy(() => import("../Routes/Contact"));
const SeeItem = lazy(() => import("../Routes/SeeItem"));

const renderLoader = () => <Loader />;

const AppRouter = () => (
  <Router>
    <Suspense fallback={renderLoader()}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/project" component={Project} />
        <Route path="/contact" component={Contact} />
        <Route exact path="/item/:itemId" component={SeeItem} />
        <Redirect from="*" to="/" />
      </Switch>
    </Suspense>
  </Router>
);

export default AppRouter;
