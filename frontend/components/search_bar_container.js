import {connect} from 'react-redux';
import SearchBar from './search_bar';

const mapStateToProps = (state, ownProps) => ({
    cities: Object.keys(state.entities.cities).map((key) => state.entities.cities[key])
});

const mapDispatchToProps = (dispatch, ownProps) => {

}

const SearchBarContainer = connect(mapStateToProps, mapDispatchToProps)(SearchBar);

export default SearchBarContainer;