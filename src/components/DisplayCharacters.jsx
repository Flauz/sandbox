import React from 'react'
import PropTypes from 'prop-types';

const DisplayCharacters = ({ character }) => {
    return (
        <div style={{ height: "5vh", width: "20vw", background: "rgba(117,117,117,0.3)", border: "solid", borderRadius: "30px", margin: "auto", marginTop: "1vh" }}>
            <h4>{character.name}</h4>
        </div>
    )
}

DisplayCharacters.propTypes = {
    character: PropTypes.object.isRequired
}

export default DisplayCharacters
