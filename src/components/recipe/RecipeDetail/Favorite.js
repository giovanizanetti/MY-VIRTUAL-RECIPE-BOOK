import React from 'react';

const Favorite = ({ style, favorite })  => {
    return (
        <a href="#!">
            {
                favorite 
                ? <i 
                    style={ style }
                    class="material-icons">favorite</i> 
                : <i 
                    style={ style }
                    class="material-icons">favorite_border</i> 
            }
        </a>

    )
}

export default Favorite