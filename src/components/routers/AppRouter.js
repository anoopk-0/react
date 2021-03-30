import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Products from "./Products.";
import Posts from "./Posts";
import Dashboard from "./admin/Dashboard";
import Home from "./Home";
import ProductDetails from "./ProductDetails";
import NotFound from "./NotFoundPage";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <NavBar />
      <div id="content-area">
        <Switch>
          {/* based on router we want to render the component in this content area */}

          <Route path="/product/:id" component={ProductDetails} />
          {/* to pass addational props */}
          <Route path="/product">
            {
                (props) => (
                    <Products sortedBy="newest"  {...props}/>
                )
            }
          </Route>
          {/* <Route path="/product" component={Products} /> */}
          <Route path="/posts/:year?/:month?" component={Posts} />
          {/* ? make it optional, optinal should be avoided */}
          <Route path="/admin" component={Dashboard} />
          <Route path="/not-found" component={NotFound} />
          <Route exact path="/" component={Home} />

          {/* if it come it this, then it doesn't match with any url */}
          {/*     <Redirect from="some" to="someother post" /> */}
          <Redirect to="/not-found" />
        </Switch>
      </div>
    </BrowserRouter>
  );
}
/**
 * to get routing in react need to install package called : react-router-dom
 * then incapulste the parent of the dom tree with {BrowerRouter} from react-router-dom, this is bascally done in index.js
 *
 * install query-string package for location (serach) / query parameter
 *
 * <Route path="/products" component={Products} />
 * the algo mathc the path, if it matches then render the component
 *
 * the matching algo, se if the path start with certain path if it match with / and then some name , then it render both the compoenet
 *      1. we use exect key work in ROute
 *      2. switch compoenent: switch will render the first child that matches the location, will using the switch we should order aur route for
 *          more specfic to more generic one.
 *
 * component wrapped with Route has 3 by defualt props : histroy, location and match
 * history : to nav to diffenet page
 * location: to know where the app is now : as the query string in search
 * match: have the query string and query params
 *
 * to learn more see the doc.
 */
