import React from 'react'

export default function Conditional(greet = true) {
    /*
     if (!greet) {
        return <h1>hello</h1>
     } else
        return <h1>byee</h1>
    */

    return (
        greet ? <h1>hello all</h1> : <h1>byeee</h1>
    )
}

/**
 * conditional rendering
 *
 * 1.if/else
 * 2.element variable
 * 3.ternary operator
 * 4.short circut operator
 */