import React from 'react';

const Pagination = (props) => {
    const { totalRecipes, recipesPerPage, paginate, currentPage} = props
    const pageNumbers = []
    const calculatePages = Math.ceil(totalRecipes / recipesPerPage)

    //Add nessessary pages to the paginator
    for(let i = 1; i <= calculatePages; i++) {
        pageNumbers.push(i)
    }

    return (
        //show pagination only if is nessessary
        totalRecipes > recipesPerPage &&
        <ul className="pagination">
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
        </ul>
    )
}

export default Pagination