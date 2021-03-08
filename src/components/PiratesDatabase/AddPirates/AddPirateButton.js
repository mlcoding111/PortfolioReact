import React from 'react'
import { Link } from 'react-router-dom'

const AddPirateButton = (props) => {

  return (
    <>
      <Link to="/AddPirate" className="btn btn-primary m-5">
        Add Pirate
      </Link>
    </>
  )
}

export default AddPirateButton
