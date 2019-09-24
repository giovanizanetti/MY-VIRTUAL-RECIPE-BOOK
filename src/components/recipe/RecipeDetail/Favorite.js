import React from 'react';

const Favorite = ({ style, favorite, handleFavoriteClick })  => {
    return (
        <a onClick={ handleFavoriteClick} href="#!">
            {
                favorite 
                ? <i 
                    style={ style }
                    className="material-icons">favorite</i> 
                : <i 
                    style={ style }
                    className="material-icons">favorite_border</i> 
            }
        </a>

    )
}

export default Favorite