import React, { Component } from 'react';
import { connect } from 'react-redux';

import Navbar from '../../helpers/Navbar';
import { showsActions } from '../../actions';
import { TableList } from '../../helpers';

class TVShows extends Component {
    constructor(props) {
        super(props);

        this.state = {
            query: ''
        }

        this.onSearch = this.onSearch.bind(this);
    }

    componentDidMount() {
        const { dispatch } = this.props;

        dispatch(showsActions.getShows());
    }

    onSearch(query) {
        const { dispatch } = this.props;

        if (query !== undefined && query.length >= 3) {
            dispatch(showsActions.searchShows(query));
        }

        this.setState({ query })
    }

    render() {
        const { shows, searchedShows } = this.props;
        const { query } = this.state;
        const showShows = query === undefined || query === '' || query.length < 3 ?
            shows !== undefined ? shows.results.slice(0, 10) : [] : 
            searchedShows !== undefined ? searchedShows.results : [];

        return (
            <div className="tv-shows">
                <Navbar active='shows' onSearch={this.onSearch} />
                <TableList category='shows' list={showShows !== undefined ? showShows : []} />
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    const { getShows, searchShows } = state;

    return {
        shows: getShows.shows,
        searchedShows: searchShows.searchedShows
    };
};

TVShows = connect(mapStateToProps)(TVShows);
export default TVShows;