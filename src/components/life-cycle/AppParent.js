import { Component } from "react";
import AppChild from "./AppChild";

class AppParent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            hasError: false
        };
        this.handleClick = this.handleClick.bind(this)
        // special function which is called whenever a new class component is created
        // initializing state and binding event handler
        // no http call
        // alwasy call the super, this will call the base class constructor
        // dirctly over this.state in constructor
        console.log('Parent Constructor')
    }

    static getDerivedStateFromProps(props, state) {
        // getDerivedStateFromProps is invoked right before calling the render method, both on the initial mount and on subsequent updates
        // It should return an object to update the state, or null to update nothing.
        // This method exists for "rare use cases" where the state depends on changes in props over time.
        // since it is a static method , it don't have access to 'this'
        // no side effect

        console.log('Parent getDerivedStateFromProps')

        return null;
    }

    shouldComponentUpdate(nextProps, nextState) {
        // dictate if the component should re-render or not.
        // This method only exists as a performance optimization.
        // compare this.props with nextProps and this.state with nextState and return false to tell React the update can be skipped
        // Note that returning false does not prevent child components from re-rendering when their state changes.***
        // "rare use cases" 

        console.log('Parent shouldComponentUpdate')

        //child will not render when return fasle.
        return true;
    }


    getSnapshotBeforeUpdate(prevProps, prevState) {
        //is invoked right before the most recently rendered output is committed to e.g. the DOM
        //It enables your component to capture some information from the DOM (e.g. scroll position) before it is potentially changed. Any value returned by this lifecycle will be passed as a parameter to componentDidUpdate().
        //A snapshot value (or null) should be returned.

        // getSnapshotBeforeUpdate() should be used with componentDidUpdate().

        // Capture the scroll position so we can adjust scroll later.
        // if (prevProps.list.length < this.props.list.length) {
        //     const list = this.listRef.current;
        //     return list.scrollHeight - list.scrollTop;
        // }

        console.log('Parent getSnapshotBeforeUpdate')

        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {

        //call after the render is finshed in the re-render cycle.
        // called only once
        // can make side effect

        // if (this.props.userID !== prevProps.userID) {
        //     this.fetchData(this.props.userID);
        // }


        //If your component implements the getSnapshotBeforeUpdate() lifecycle (which is rare), the value it returns will be passed as a third “snapshot” parameter to componentDidUpdate(). Otherwise this parameter will be undefined.
        //componentDidUpdate() will not be invoked if shouldComponentUpdate() returns false.

        console.log('Parent componentDidUpdate')

    }

    handleClick() {
        this.setState((preState) => {
            return { count: preState.count + 1 }
        })
    }

    componentDidMount() {
        // componentDidMount() is invoked immediately after a component is mounted (inserted into the tree).
        // this is a good place to instantiate the network request.
        // it is called once i a whole lifeCycle 

        console.log('Parent componentDidMount')
    }


    componentWillUnmount() {
        //componentWillUnmount() is invoked immediately before a component is unmounted and destroyed.
        //Perform any necessary cleanup in this method, such as invalidating timers, canceling network requests, or cleaning up any subscriptions that were created in componentDidMount().
        // should not call setState() 

        console.log('Parent componentWillUnmount')
    }

    static getDerivedStateFromError(error) {
        //This lifecycle is invoked after an error has been thrown by a descendant component. It receives the error that was thrown as a parameter and should return a value to update state.

        //getDerivedStateFromError() is called during the “render” phase, so side-effects are not permitted.

        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error, info) {
        //This lifecycle is invoked after an error has been thrown by a descendant component

        // error - The error that was thrown.
        // info - An object with a componentStack key containing information about which component threw the error.

        // componentDidCatch() is called during the “commit” phase, so side-effects are permitted.

        //In the event of an error, you can render a fallback UI with componentDidCatch() by calling setState, but this will be deprecated in a future release. Use static getDerivedStateFromError() to handle fallback rendering instead.
    }

    render() {
        // render() method is the only required method in a class component.
        // The render() function should be pure, meaning that it does not modify component state, it returns the same result each time it’s invoked, and it does not directly interact with the browser.
        // render() will not be invoked if shouldComponentUpdate() returns false.
        // children life cycle method executed

        console.log('Parent render')

        return (
            <>
                <AppChild count={this.state.count} />
                <button onClick={this.handleClick}>Increment</button>
            </>
        );
    }
}

export default AppParent;