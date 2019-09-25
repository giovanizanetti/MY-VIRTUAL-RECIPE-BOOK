import React from 'react'
import ReactTooltip from 'react-tooltip'

const Favorite = ({ style, favorite, handleFavoriteClick })  => {
    const tooltipMessage = !favorite ? 'Add to Favotites' : 'Remove from Favorites'
    return (
        <>
            <a data-tip={ tooltipMessage } onClick={ handleFavoriteClick } href="#!">
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
            <ReactTooltip />
        </>
    )
}

export default Favorite