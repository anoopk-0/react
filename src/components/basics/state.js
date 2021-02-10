//class Compoenet : 
class AppStateEmaple extends Component {

    /*
     Constructor functions, introduced in ES6, is the first function called in a class when it is first instantiated — meaning when a new object is created from the class. Initializing the state within the constructor function allows the state object to be created before React renders the component.
     */


    //1 way to define state in constr
    constructor(props) {
        //super is required: as we extend react Component class
        super(props);
        this.state = {
            name: 'anoop'
        };
    }

    //2 way to define state in cc.
    // state = {}

    render() {
        return (
            <h1>{this.state.name}</h1>
        );
    }
}

export default AppStateEmaple;
