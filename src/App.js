import React, { useEffect} from 'react';
import {connect} from 'react-redux';
import {Container, Card} from 'semantic-ui-react';

import { setBooks } from './actions/books';
import MenuComponent from "./components/MenuComponent";
import BookCard from "./components/BookCard";
import './app.css';

function App(props) {
    //const {books} = props || [];
    const books = props.books;
    const isReady = props.isReady;
    const {setBooks} = props;
    
    useEffect(() => {
        const getBooks = async () => {
            let response = await fetch('/books.json');
            const books = await response.json();
            setBooks(books);
        };
        getBooks();
    },[]);
    
    return (
        <Container>
            <MenuComponent />
            <Card.Group itemsPerRow={4}>
                {
                    !books ? 'Загрузка...' : books.map(book => (
                        <BookCard key={book.id} {...book} />
                    ))
                }
            </Card.Group>
        </Container>
    );
}

const mapStateToProps = ({books}) => (
    {
        books: books.items,
        isReady: books.isReady
    }
    );
const mapDispatchToProps = dispatch => ({
    setBooks: books => dispatch(setBooks(books))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

