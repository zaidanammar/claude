import React from 'react'
import { useNavigate } from 'react-router-dom'
import type { People } from '../../../types/people'

interface CardProps {
  people: People
}

const Card = ({ people }: CardProps) => {
  const navigate = useNavigate()

  return (
    <div
      className="bg-white border rounded-md shadow my-5 p-5 font-semibold cursor-pointer"
      onClick={() => navigate(`/people/${people.url.slice(29)}`)}
      role="presentation"
    >
      <p>{people.name}</p>
    </div>
  )
}

export default Card
