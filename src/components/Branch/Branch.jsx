import React from 'react'
import PropTypes from 'prop-types'
import { BranchCard } from './styled';

const Branch = ({branch}) => {
  const { name } = branch;
  return (
    <BranchCard>
      <h3>{name}</h3>
      <p> <span>Country:</span> Country </p>
      <p> <span>City:</span> city </p>
    </BranchCard>
  )
}

Branch.propTypes = {
  branch:PropTypes.object
}

export default Branch
