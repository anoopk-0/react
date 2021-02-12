import { Component } from "react";
import Hero from './Hero';
import ErrorBoundary from './ErrorBoundary';

class AppErrorBoundry extends Component {
    state = {}
    render() {
        return (
            <>
                <Hero heroName="batman" />
                <Hero heroName="superman" />
                <ErrorBoundary>
                    <Hero heroName="joker" />
                </ErrorBoundary>
            </>
        );
    }
}

export default AppErrorBoundry;

/*
Error Boundary
    : a class component that implements either one or both of the life cycle methods getDerivedStateFromError or componentDidCatch beocomes
    a Errorboundary.

    The static method getDerivedStateFromError method is used to render a fallback UI after an error is thrown and the componentDidCatch method
    is used to log the error information.
*/