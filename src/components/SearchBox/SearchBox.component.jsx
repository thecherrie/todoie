import React from 'react';
import './SearchBox.styles.css';

 class SearchBox extends React.Component {

    filterTasks = (e) => {
        this.props.onChange(e.target.value);
    }

    render() {
        return(
            <div>
                <input onChange={this.filterTasks} placeholder="Search todos and tags..." />
            </div>
        );
    }

 }

export default SearchBox;