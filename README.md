## React

open source library for building user interface.it is not a framework. it mainly focus on UI and not on routing and HTTP request.
react has a component based architecture.

**Declarative programming is a programming paradigm … that expresses the logic of a computation without describing its control flow**
**Imperative programming is a programming paradigm that uses statements that change a program’s state.**

## components

components are the building block of an application.in react we have 2 type of component
        - class based components(previously also known as stateFull component, had lifecycle method)
        - functional components(previously also known as stateless component, doesn't had lifecyle method)


functional component: 
                -simple function
                -use as much as you can
                -remove complexity around this key word
                -it also has states after hooks(useState) but should be mantain at one place.
                -mainly responsible for UI rendering
                -stateless/dumb/presentational

class component:
                -provide lifecycle hooks
                -error boundies can only be possible using class component hooks.
                -have multiple was of having access a function , and confusion around this key work.
                

**state in either components cann't be change directly**


## props vs state

---------------------------------------------------------|---------------------------------------------------------
                props                                    |                      state
-------------------------------------------------------------------------------------------------------------------
        props get pass to the component                  |          state is managed within the component
        props are immutable                              |          state can be change, with setState
        