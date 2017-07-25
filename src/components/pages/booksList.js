'use strict'

import React, { Component } from 'react';
import { connect } from 'react-redux';

class BooksList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const booksLists = this.props.books.map(book => {
            return (
                <div key={book.id}>
                    <h2>{book.title}</h2>
                    <h2>{book.description}</h2>
                    <h2>{book.price}</h2>
                </div>
            )
        });

        return (
            <div>
                <h1>Hello React</h1>
                {booksLists}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        books: state.books.books
    }
}

export default connect(mapStateToProps)(BooksList);