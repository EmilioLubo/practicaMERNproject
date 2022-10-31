import React from 'react'

export default function Slider({position, name, action}) {
  return (
    <div className={`gray flecha ${position} flex j-center a-center`} onClick={action}> {name} </div>
  )
}
