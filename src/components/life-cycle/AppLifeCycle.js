import React from 'react'
import AppParent from './AppParent';

export default function AppLifeCycle() {
    return (
        <div>
            <AppParent />
        </div>
    )
}

/*
when we create a component, it goes through different life cycle.

life cycle method can be divide into 4 phases.
    #Mounting : is called when the instance of component is called and inserted into the DOM.
                -constructor,
                -static getDerivedStateFromProps
                -render(only required method)
                -componentDidMount()

    #Updating : When a component is being re-rendered as a result of changes in either states or props.
                -static getDerivedStateFromProps()
                -shouldComponentUpdate()
                -render()
                -getSnapShotBeforeUpdate()
                -componentDidUpdate()

    #UnMounting : when component is removed from DOM.
                  -ComponentWillUnMount()

    #ErrorHandling : when there is an error during rendering ,in a lifecycle method, or in the constructor of any child component.
                     -static getDerivedStateFromError
                     -componentDidCatch
*/
