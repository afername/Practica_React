import React, { PureComponent } from 'react';
import { Route, Switch } from 'react-router-dom';

import TVShows from '../components/TVShows';
import Movies from '../components/Movies';
import MovieDetails from '../components/Movies/MovieDetails';
import ShowDetails from '../components/TVShows/ShowDetails';

class Router extends PureComponent {

    render() {
        return (
            <Switch>
                <Route path="/(|shows)/" exact component={TVShows} />
                <Route path="/movies" exact component={Movies} />
                <Route path="/movies/:id" exact component={MovieDetails} />
                <Route path="/shows/:id" exact component={ShowDetails} />
            </Switch>
        )
    }
}

export default Router;