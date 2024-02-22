import React from 'react';

const Character = (props) => {
    return (
        <div>
            <h2>{props.name}</h2>
            <img src={props.imgUrl} />
            <ul>
                <li>Date of Birth: {props.birth}</li>
                <li>Date of Death: {props.death}</li>
                <li>Race: {props.race}</li>
                <li>Realm: {props.realm}</li>
                <li>Spouse: {props.spouse}</li>
            </ul>
        </div>
    )
}

export default Character;