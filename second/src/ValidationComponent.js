import React from 'react'
const validation = (props) => {
  return <p>{props.textLength < 5 ? 'Text is too short' : 'Text is the right length'}</p>
}

export default validation