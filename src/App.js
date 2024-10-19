// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import ProductList from "./pages/ProductList";
import ThankYou from "./pages/ThankYou";

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={ProductList} />
        <Route path="/thankyou/:productName" component={ThankYou} />
      </Switch>
    </Router>
  );
};

export default App;
