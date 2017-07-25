'use strict'

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getBooks} from '../../actions/booksActions';
import {bindActionCreators} from 'redux';
import {Grid, Col, Row, Button} from 'react-bootstrap';
import BookItem from './bookItem';

class BooksList extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // dispatch an action
        this.props.getBooks([
            {
                id: 1,
                title: 'this is the book title',
                description: 'this is the book description',
                price: 43.33
            },
            {
                id: 2,
                title: 'this is the second book title',
                description: 'this is the secon book description',
                price: 60
            }
            ]
        )
    }

    render() {
        const booksLists = this.props.books.map(book => {
            return (
                <Col xs={12} sm={6} md={4}
                     key={book.id}>
                    <BookItem
                        id= {book.id}
                        title={book.title}
                        description={book.description}
                        price={book.price}/>
                </Col>
            )
        });

        return (
            <Grid>
                <Row>
                    {booksLists}
                </Row>
            </Grid>
        )
    }
}

function mapStateToProps(state) {
    return {
        books: state.books.books
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getBooks
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);