import React from 'react'
const char = (props) => {
  const style = {
  	'display': 'inline-block'
  }
  return <p onClick={props.click} style={style}>{props.char}</p>
}

export default char