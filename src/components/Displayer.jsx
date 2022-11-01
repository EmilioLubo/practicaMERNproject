import React from 'react'

export default function Displayer({action, name}) {
  return (
    <button onClick={action} >{name}</button>
  )
}
