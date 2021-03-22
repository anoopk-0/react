import React from 'react';
import classNames from 'classnames';

import { Container, Title, Body, Text, Image, Button } from './styles';

const Card = ({ classes, children, ...props }) => {
    return (
        <Container classNames={classNames('card', classes)} {...props}>
            {children}
        </Container>
    );
}

Card.Body = function CardBody({ classes, children, ...props }) {
    return (
        <Body classNames={classNames('card__body', classes)} {...props}>
            {children}
        </Body>
    )
}


Card.Title = function CardTitle({ classes, children, ...props }) {
    return (
        <Title classNames={classNames('card__title', classes)} {...props}>
            {children}
        </Title>
    )
}

Card.Text = function CardText({ classes, children, ...props }) {
    return (
        <Text classNames={classNames('card__text', classes)} {...props}>
            {children}
        </Text>
    )
}

Card.Image = function CardImage({ alt, src, classes, ...props }) {
    return (
        <Image
            src={src}
            alt={alt}
            classNames={classNames('card__image', classes)}
            {...props}
        />
    )
}



Card.Button = function CardButton({ classes, children, ...props }) {
    return (
        <Button type="button" classNames={classNames('card__button', classes)} {...props}>
            {children}
        </Button>
    )
}


export default Card;
