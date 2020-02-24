import React, {Component} from 'react';
import {connect} from 'react-redux';
import { setBooks } from './actions/books';

function App(props) {
    const {books} = props.books;
    const {setBooks} = props;
    const newBooks = [
        {
            id: 0,
            title: 'Shopping card!'
        }
    ];
    return (
        <>
            <div>{books[0].title}</div>
            <button onClick={() => setBooks(newBooks)}>Change book!</button>
        </>
    );
}

const mapStateToProps = state => ({...state});
const mapDispatchToProps = dispatch => ({
    setBooks: books => dispatch(setBooks(books))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

