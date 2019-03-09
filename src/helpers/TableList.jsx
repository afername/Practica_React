import React, { PureComponent } from 'react';
import { Grid, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom'

import './TableList.css';

class TableList extends PureComponent {
    render() {
        const { list, category } = this.props;

        return (
            <Grid fluid={true}>
                <Row className="show-grid">
                    {list.map(item =>
                        <Col key={item.id} className='box-item' sm={6} md={3}>
                         <Link to={'/' + category + '/' + item.id} className='details-link'>
                        <img className='backdrop-image' src={"https://image.tmdb.org/t/p/original" + item.poster_path} alt="Photo"/>
                        <h5 className='title'>{item.title !== undefined ? item.title : item.name}</h5>
                           
                                {item.overview}
                            </Link>
                        </Col>
                    )}
                </Row>
            </Grid>
        )
    }
}

export default TableList;