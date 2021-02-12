import React, { createContext } from 'react';

const CountContext = createContext();

export default CountContext;

// we have have default value to context.then we don't have to pass value from provider.
// default is override with provider.

//Context object accepts a displayName string property. React DevTools uses this string to determine what to display for the context.

/**
 * The contextType property on a class can be assigned a Context object created by React.createContext(). This lets you consume the nearest current value of that Context type using this.context. You can reference this in any of the lifecycle methods including the render function.
 *
 * You can only subscribe to a single context using this API. If you need to read more than one see Consuming Multiple Contexts.
 *
 * and only work on class component
 */