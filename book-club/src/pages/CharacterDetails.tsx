import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

interface CharacterDetails {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: { name: string };
    location: { name: string };
    image: string;
    episode: string[];
}

const CharacterDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [character, setCharacter] = useState<CharacterDetails | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        console.log(id)
        async function fetchCharacterDetails() {
            try {
                const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
                const data = await response.json();
                setCharacter(data);
            } catch (error) {
                console.error('Error fetching character details:', error);
            } finally {
                setLoading(false);
            }
        }

        fetchCharacterDetails();
    }, [id]);

    if (loading) {
        return <p>Loading character details...</p>;
    }

    if (!character) {
        return <p>Character not found.</p>;
    }

    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
            <img src={character.image} alt={character.name} style={{ width: '200px', borderRadius: '8px' }} />
            <h1>{character.name}</h1>
            <p>Status: {character.status}</p>
            <p>Species: {character.species}</p>
            <p>Type: {character.type || 'N/A'}</p>
            <p>Gender: {character.gender}</p>
            <p>Origin: {character.origin.name}</p>
            <p>Location: {character.location.name}</p>
            <p>Episodes: {character.episode.length}</p>
        </div>
    );
};

export default CharacterDetails;