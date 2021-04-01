import React, { lazy, Suspense } from 'react';
import { BrowserRouter, NavLink, Route, Switch } from 'react-router-dom';
// import About from './About';
// import Login from './Login';
// import Home from './Home';

const About = lazy(
    () => import(
        /*webpackChunkName:'aboutChunk'*/
        /*webpackPrefetch:true*/
        './About')
);
const Login = lazy(() => import('./Login'));
const Home = lazy(() => import(/*webpackChunkName:'Home'*/'./Home'));

const Routes = () => {
    return (
        <BrowserRouter>
            <div>
                <ul>
                    <li>
                        <NavLink to="/about">About</NavLink>
                    </li>
                    <li> <NavLink to="/login">Login</NavLink></li>
                    <li> <NavLink to="/">Home</NavLink>
                    </li>
                </ul>
            </div>
            <div id="content-area">
                <Suspense fallback={<div>Loadig....</div>}>
                    <Switch>
                        <Route path="/about" component={About} />
                        <Route path="/login" component={Login} />
                        <Route path="/" component={Home} />
                    </Switch>
                </Suspense>
            </div>
        </BrowserRouter>
    );
}

export default Routes;
//create 3 chunk of files. which is loaded on demand

/**
 * if we want to prefetch some route , then we can configure webpack
 */