import React, { Component } from 'react';

const withCounter = (WrappedComponent, amount = 1) => {

    class CounterComponent extends Component {

        constructor(props) {
            super(props)

            this.state = {
                count: 0
            }
        }

        handleAction = () => {
            this.setState((preState) => {
                return { count: preState.count + amount }
            })
        }

        render() {
            return <WrappedComponent count={this.state.count} handleAction={this.handleAction} {...this.props} />
        }
    }

    return CounterComponent;

}

export default withCounter;
