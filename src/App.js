import "./App.css";
import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login/Login";
import About from "./pages/About";
import Page404 from "./pages/Page404";
import Category from "./pages/Category/Category";
import Cart from "./pages/Cart/Cart";
import Favorites from "./pages/Favorites";
import "firebase/auth";
import Product from "./pages/Product/Product";

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <Switch>
          <Route path="/login" render={(props) => <Login {...props} />} />
          <Route exact path="/" render={(props) => <Home {...props} />} />
          <Route path="/cart" component={Cart} />
          <Route path="/about" component={About} />
          <Route path="/category/:categoryName" component={Category} />
          <Route path="/favorites" component={Favorites} />
          <Route path="/product/:productID" component={Product} />
          <Route path="*" component={Page404} />
        </Switch>
      </div>
    );
  }
}

export default App;
