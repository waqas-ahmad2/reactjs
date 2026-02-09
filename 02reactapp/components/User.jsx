import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const param = useParams()
  return (
    <div>i am a {param.username}</div>
  )
}

export default User