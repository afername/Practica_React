import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';

import { moviesActions } from '../../actions';
import { history } from '../../helpers';

class MovieDetails extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: props.match.params.id
        }
    }

    componentDidMount() {
        const { dispatch } = this.props;
        const { id } = this.state;

        dispatch(moviesActions.getMovieById(id));
    }

    onBack() {
        history.goBack();
    }

    render() {
        const { movie } = this.props;

        return (
            <div className="movie">
                <Button bsStyle="primary" onClick={this.onBack} className='details-margin'>Back</Button>
                <div className='details-margin'>
                {movie !== undefined && <img className='image-width' src={"https://image.tmdb.org/t/p/original" + movie.poster_path} alt="Photo"/>}
                    <p>Movie overview:</p>
                    {movie !== undefined && <p>{movie.overview}</p>}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    const { getMovie } = state;

    return {
        movie: getMovie.movie
    };
};

MovieDetails = connect(mapStateToProps)(MovieDetails);
export default MovieDetails;