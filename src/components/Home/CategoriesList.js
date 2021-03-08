// CODED BY : Michael Lacroix ( MLWeb )
// LAST EDIT : 2020-09-09 

import React from 'react'

export default function CategoriesList(props) {

    const { categorie, currentCategorie, handleClick } = props;

    return (
        <>
            {/* Print a list of categories */}
            <div className="row d-flex justify-content-center">
                <ul className="categories-list mt-5">
                    {categorie.map((element, i) => (
                        <li key={i}><a href="#/" className={element === currentCategorie ? "active" : ""} onClick={() => handleClick(element)}>{element}</a></li>
                    ))}
                </ul>
            </div>
        </>
    )
}
