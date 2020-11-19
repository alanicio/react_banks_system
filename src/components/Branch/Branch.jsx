import React from 'react'
import PropTypes from 'prop-types'

const Branch = ({branch}) => {
  const { name } = branch;
  return (
    <div>
      <h3>{name}</h3>
    </div>
  )
}

Branch.propTypes = {
  branch:PropTypes.object
}

export default Branch
