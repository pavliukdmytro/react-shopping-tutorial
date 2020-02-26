import React, { useEffect} from 'react';
import {Container, Card} from 'semantic-ui-react';

import MenuComponent from "./MenuComponent";
import BookCard from "./BookCard";
import Filter from "./Filter";
import '../app.css';

function App(props) {
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
            <Filter />
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


export default App;

