import React from 'react'
import { isEmpty } from 'lodash'
import { selectFavourite } from '../../store/favourite/favouriteSlice'
import { useAppSelector } from '../../store/hooks'
import Card from '../../components/molecules/card'
import type { People } from '../../types/people'

const Favourite = () => {
  const favourite = useAppSelector(selectFavourite)

  return (
    <main>
      <h1 className="mb-4 text-2xl font-semibold pt-4">Favourite</h1>
      {isEmpty(favourite) ? (
        <section className="flex justify-center pt-10">
          <p className="font-bold">Your favourite is empty :(</p>
        </section>
      ) : (
        favourite.map((people: People) => (
          <Card people={people} key={people.name} />
        ))
      )}
    </main>
  )
}

export default Favourite
