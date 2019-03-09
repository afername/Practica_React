import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';

import { showsActions } from '../../actions';
import { history } from '../../helpers';

class ShowDetails extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: props.match.params.id
        }
    }

    componentDidMount() {
        const { dispatch } = this.props;
        const { id } = this.state;

        dispatch(showsActions.getShowById(id));
    }

    onBack() {
        history.goBack();
    }

    render() {
        const { show } = this.props;

        return (
            <div className="show">
                <Button bsStyle="primary" onClick={this.onBack} className='details-margin'>Back</Button>
                <div className='details-margin'>
                {show !== undefined && <img className='image-width' src={"https://image.tmdb.org/t/p/original" + show.poster_path} alt="Photo"/>}
                    <p>Show overview:</p>
                    {show !== undefined && <p>{show.overview}</p>}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    const { getShow } = state;

    return {
        show: getShow.show
    };
};

ShowDetails = connect(mapStateToProps)(ShowDetails);
export default ShowDetails;