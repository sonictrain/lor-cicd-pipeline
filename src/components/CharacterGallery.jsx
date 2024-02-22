import React from 'react';
import Character from './Character'
import characterData from '../data/characterData.json'

const CharacterGallery = () => {
    return (
        <ul>
            {characterData.map((c) => (
                <Character
                    name={c.name}
                    imgUrl={c.imgUrl}
                    birth={c.birth}
                    death={c.death}
                    race={c.race}
                    realm={c.realm}
                    spouse={c.spouse}
                />
            ))}
        </ul>
    )
}

export default CharacterGallery;