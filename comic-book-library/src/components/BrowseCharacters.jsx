import React from 'react';
import { Link } from 'react-router-dom';

const BrowseCharacters = ({ characters }) => {
  return (
    <div className="browse-characters">
      <h2>Browse Characters</h2>
      <ul>
        {characters.map(character => (
          <li key={character.id}>
            <Link to={`/characters/${character.id}`}>
              <img src={character.thumbnail} alt={character.name} />
              {character.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BrowseCharacters;
