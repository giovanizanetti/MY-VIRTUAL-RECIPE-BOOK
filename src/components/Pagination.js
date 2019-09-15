import React from 'react';

const Pagination = (props) => {
    const { totalRecipes, recipesPerPage, paginate, currentPage} = props
    const pageNumbers = []
    const calculatePages = Math.ceil(totalRecipes / recipesPerPage)

    //Add nessessary pages to the paginator
    for(let i = 1; i <= calculatePages; i++) {
        pageNumbers.push(i)
    }

    console.log(totalRecipes, recipesPerPage)
    return (
        <ul className="pagination">
            <li className="disabled"><a href="#"><i className="material-icons">chevron_left</i></a></li>
            { pageNumbers.map(number => {
                const className = number === currentPage ?`active` : `waves-effect`
                return (
                    <li key={number} className={ className }>
                        <a href="#" onClick={() => paginate(number)}>{ number }</a>
                    </li>
                )
            })}
            {/* <li className="active"><a href="#!">1</a></li>
            <li className="waves-effect"><a href="#!">2</a></li>
            <li className="waves-effect"><a href="#!">3</a></li>
            <li className="waves-effect"><a href="#!">4</a></li>
            <li className="waves-effect"><a href="#!">5</a></li> */}
            <li className="waves-effect"><a href="#"><i className="material-icons">chevron_right</i></a></li>
        </ul>
    )
}

export default Pagination