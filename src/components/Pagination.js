import React from 'react';

const Pagination = (props) => {
    const { totalRecipes, recipesPerPage, paginate, currentPage} = props
    const pageNumbers = []
    const calculatePages = Math.ceil(totalRecipes / recipesPerPage)

    //Add nessessary pages to the paginator
    for(let i = 1; i <= calculatePages; i++) {
        pageNumbers.push(i)
    }

    const rightChevronClassName = currentPage !== 1 ? "waves-effect" : "disabled"
    const LeftChevronClassName = currentPage !== pageNumbers[pageNumbers.length - 1] ? "waves-effect" : "disabled"

    const handleNextPage = () => {
        const nextPage = currentPage + 1
        const lastPage = pageNumbers.slice(-1).pop()
        currentPage !== lastPage 
        && paginate(nextPage)
    }

    const handlePreviousPage = () => {
        const previousPage = currentPage - 1
        currentPage !== 1
        && paginate(previousPage)
    }

    return (
        //show pagination only if is nessessary
        totalRecipes > recipesPerPage &&
        <ul className="pagination">
            <li onClick={ handlePreviousPage } className={ rightChevronClassName }><a href="#!"><i className="material-icons">chevron_left</i></a></li>
            { 
                pageNumbers.map(number => {
                const className = number === currentPage ?`active` : `waves-effect`
                return (
                    <li key={number} className={ className }>
                        <a href="#!" onClick={() => paginate(number)}>{ number }</a>
                    </li>
                    )
                })
            }
            <li onClick={ handleNextPage }className={ LeftChevronClassName }><a href="#!"><i className="material-icons">chevron_right</i></a></li>
        </ul>
    )
}

export default Pagination