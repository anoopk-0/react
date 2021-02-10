import { parse, parseUrl } from "query-string";
import React from "react";

const Posts = ({ match, location }) => {
    const { name } = parse(location.search);

    return (
        <div className="Posts">
            Year:{ match.params.year} , Month:{ match.params.month} - {name}
        </div>
    );
};

export default Posts;
