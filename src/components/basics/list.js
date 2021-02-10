import { Component } from 'react';

class List extends Component {
    state = {
        data: [
            {
                id: 1,
                value: 'india'
            },
            {
                id: 2,
                value: 'USA'
            },
            {
                id: 3,
                value: 'Nepal'
            },
        ]
    }
    render() {
        return (
            <>
                {
                    //don't use index as key, cause issue while adding and updating.
                    //key is specfic to a element.and adding and updating add only the element which is not there. and don't rest all the element key.
                    // only use when you have a static list and reorder or filtered
                    this.state.data.map((item) => (
                        <div key={item.id}>{item.value}</div>
                    ))
                }
            </>
        );
    }
}

export default List;