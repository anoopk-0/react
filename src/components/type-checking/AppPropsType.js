import { Component } from "react";
import PropTypes from 'prop-types';

class AppPropsType extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                Name: {this.props.name}
            </div>
        );
    }
}


AppPropsType.propTypes = {
    name: PropTypes.string.isRequired
};

AppPropsType.defaultProps = {
    name: 'Ram'
}

export default AppPropsType;

/*
PropTypes exports a range of validators that can be used to make sure the data you receive is valid. In this example, we’re using PropTypes.string. When an invalid value is provided for a prop, a warning will be shown in the JavaScript console. For performance reasons, propTypes is only checked in development mode.

With PropTypes.element you can specify that only a single child can be passed to a component as children.

PropTypes.element,
 optionalArray: PropTypes.array,
  optionalBool: PropTypes.bool,
  optionalFunc: PropTypes.func,
  optionalNumber: PropTypes.number,
  optionalObject: PropTypes.object,
  optionalString: PropTypes.string,
  PropTypes.oneOf(['News', 'Photos']),
*/