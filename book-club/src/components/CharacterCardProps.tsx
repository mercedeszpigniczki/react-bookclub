import React from 'react';

interface CharacterCardProps {
    name: string;
    image: string;
    status: string;
    species: string;
}


function CharacterCard({ name, image, status, species }: CharacterCardProps) {
    return (
        <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px', borderRadius: '8px', textAlign: 'center' }}>
            <img src={image} alt={name} style={{ width: '150px', borderRadius: '8px' }} />
            <h2>{name}</h2>
            <p>Status: {status}</p>
            <p>Species: {species}</p>
        </div>
    );
}

export default CharacterCard;