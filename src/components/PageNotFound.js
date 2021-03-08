import React from 'react'
import {Link} from 'react-router-dom'
 
export default function PageNotFound() {
    return (
        <div className="pageNotFoundBody d-flex justify-content-center align-items-center">
            <Link to="/"> <div className="btn btn-primary">Back home</div></Link>
        </div>
    )
}
