import React from 'react'
import { TextInput, ToolsContainer } from './styled'

const FilterTools = () => {
  return (
    <ToolsContainer>
      <TextInput>
        <label>Búsqueda</label>
        <input type="text" />
      </TextInput>
    </ToolsContainer>
  )
}

export default FilterTools
