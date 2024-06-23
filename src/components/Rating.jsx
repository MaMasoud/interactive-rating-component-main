import React from 'react'

export default function Rating({handleRating, value, isActive}) {
  return (
    <button className={`rate ${isActive? 'active': ''}`} onClick={()=>handleRating(value)}>
        {value}
    </button>
  )
}
