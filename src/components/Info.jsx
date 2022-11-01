import React from 'react'

export default function Info({textType, text}) {
  return (
    <div>
        <p className={textType}>{text}</p>
    </div>
  )
}
