import React from 'react';
import Card from './Card';

import data from './fixture.json';

const HomeCompoundCompo = () => {
    return (
        <main>
            {
                data.map(movie => (
                    <Card className="mr" key={`${movie.id}`}>
                        <Card.Image src={movie.image} alt={movie.title} />
                        <Card.Body>
                            <Card.Title>{movie.title}</Card.Title>
                            <Card.Text>{movie.desc}</Card.Text>
                            <Card.Button>{movie.ctaText}</Card.Button>
                        </Card.Body>
                    </Card>
                ))
            }
        </main>
    );
}

export default HomeCompoundCompo;


// npm className :A simple JavaScript utility for conditionally joining classNames together.