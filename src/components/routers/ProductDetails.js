import React, { Component } from "react";


// const ProductDetails = (props.match.param.id) => {
//   return <div className="ProductDetails">ProductDetails!! {props.match.param.id}</div>;
// };


class ProductDetails extends Component {
    render() {
        return (
            <div>
                {/* the push method will add a new address in the browser history and 
                replace basiclly replace the address ho we don;t have history  used in login pages
                goBack: also work same as push , to go pack to a last route
                */}
                <h1>ProductDetails!! - {this.props.match.params.id}</h1>
                <button onClick={() => this.props.history.goBack()}>save</button>
            </div >
        );
    }
}

export default ProductDetails;
