import React from 'react'

export default function Slider({name, action}) {
  return (
    <button onClick={action}> {name} </button>
  )
}
