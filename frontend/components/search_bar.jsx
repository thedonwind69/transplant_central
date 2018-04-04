import React from 'react';

class SearchBar extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            searchValue: ''
        }
    }

    changeSearchValue (event) {
        event.preventDefault();
        this.setState({
            searchValue: event.currentTarget.value
        })
    }

    render () {
       
        return (
            <div>
                <input 
                    class="search-bar"
                    type="text" 
                    placeholder="Search City"
                    value={this.state.searchValue}
                    onChange={this.changeSearchValue.bind(this)}
                />
           </div>
        )
    }



}

export default SearchBar;