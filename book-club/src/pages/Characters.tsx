import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import CharacterCard from '../components/CharacterCardProps';

interface Character {
    id: number;
    name: string;
    image: string;
    status: string;
    species: string;
}

const Characters: React.FC = () => {

    const [characters, setCharacters] = useState<Character[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchCharacters() {
            try {
                const response = await fetch('https://rickandmortyapi.com/api/character');
                const data = await response.json();
                setCharacters(data.results);
            } catch (error) {
                console.error('Error fetching characters:', error);
            } finally {
                setLoading(false);
            }
        }

        fetchCharacters();
    }, []);

    if (loading) {
        return <p>Loading characters...</p>;
    }

  return (
    <div>
        <h1 style={{ textAlign: 'center' }}>Characters</h1>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            {characters.map((character) => (
                <Link to={`/character/${character.id}`} key={character.id} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <CharacterCard
                        key={character.id}
                        name={character.name}
                        image={character.image}
                        status={character.status}
                        species={character.species}
                    />
                </Link>
            ))}
        </div>
    </div>
  );
}

export default Characters;