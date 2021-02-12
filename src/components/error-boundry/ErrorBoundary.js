import { Component, Fragment } from "react";

class ErrorBoundary extends Component {
    state = {
        hasError: false
    }

    static getDerivedStateFromError(error) {
        return { hasError: true }
    }

    componentDidCatch(error, info) {
        //log the error
        console.log(error, info)
    }

    render() {
        return (
            <div>
                {
                    this.state.hasError ? <h1>Something is Broken</h1> : this.props.children
                }
            </div>
        );
    }
}

export default ErrorBoundary;