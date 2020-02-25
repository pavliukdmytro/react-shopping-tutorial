import React from "react";
import {Card, Image, Icon} from 'semantic-ui-react';

const BookCard = ({title, author, price, image}) => {
    //console.log()
    return (
        <Card>
            <Image src={image} />
            <Card.Content>
                <Card.Header>{title}</Card.Header>
                <Card.Meta>
                    <span className='date'>{author}</span>
                </Card.Meta>
            </Card.Content>
            <Card.Content extra>
                <a>
                    <Icon name='eur' />
                    {price}
                </a>
            </Card.Content>
        </Card>
    )
};

export default BookCard;