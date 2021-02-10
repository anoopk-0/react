/**

 * @param(jsx) : javaScript XML - extenstion to js language syntax.
 *  write XML like code for elements and components
 *
 *  jsx is not necessity to write react appln.
 *  jsx make code simple and elegent
 *
 *  jsx get convert to js to be understand by the browser.
 */
import { React } from 'react';

//with jsx
const Hello = () => {
    return <h1 id="hello" className="dummy-class">hello anoop</h1>
}

//without jsx

/**
 * @param(optional params) : is a object that contain the attr. of the tag 
 */
const HelloWithOut = () => {
    return React.createElement('h1', { id: 'hello', className: 'dummy-class' }, 'hello anoop')
}