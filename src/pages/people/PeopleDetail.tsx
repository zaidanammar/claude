import React from 'react'
import { useParams } from 'react-router-dom'
import { MdOutlineFavorite, MdOutlineFavoriteBorder } from 'react-icons/md'

import Button from '../../components/atoms/Button'
import Loading from '../../components/atoms/Loading'
import { useFetchPeople } from '../../hooks/people'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import {
  addToFavourite,
  selectFavourite,
  removeFromFavourite,
} from '../../store/favourite/favouriteSlice'
import type { People } from '../../types/people'

const PeopleDetail = () => {
  const params = useParams()
  const dispatch = useAppDispatch()
  const favourite = useAppSelector(selectFavourite)
  const { data, isLoading } = useFetchPeople({ id: Number(params?.id) || 0 })

  const handleAddToFavourite = (people: People) => {
    if (favourite.includes(people)) {
      dispatch(removeFromFavourite({ name: people.name }))
    } else {
      dispatch(addToFavourite(people))
    }
  }

  return (
    <main className="pt-8 xs:mb-5 mb-28">
      {isLoading && (
        <div className="flex justify-center my-10">
          <Loading />
        </div>
      )}
      {data && (
        <div className="flex gap-5 flex-wrap">
          <div className="sm:flex-1 w-full">
            <section id="detail-title">
              <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold">{data?.name}</h1>
              </div>
            </section>

            <section className="flex my-5">
              <div className="flex flex-col text-base md:w-1/3 w-full">
                <div className="flex justify-between items-start w-full my-1">
                  <p className="font-semibold">Birth Year</p>
                  <p>{data.birth_year}</p>
                </div>

                <div className="flex justify-between items-start w-full my-1">
                  <p className="font-semibold">Gender</p>
                  <p>{data.gender}</p>
                </div>

                <div className="flex justify-between items-start w-full my-1">
                  <p className="font-semibold">Eye Color</p>
                  <p>{data.eye_color}</p>
                </div>

                <div className="flex justify-between items-start w-full my-1">
                  <p className="font-semibold">Skin Color</p>
                  <p> {data.skin_color}</p>
                </div>

                <div className="flex justify-between items-start w-full my-1">
                  <p className="font-semibold">Hair Color</p>
                  <p>{data.hair_color}</p>
                </div>

                <div className="flex justify-between items-start w-full my-1">
                  <p className="font-semibold">Height</p>
                  <p>{data.height} cm</p>
                </div>
              </div>
            </section>

            <div className="fixed inset-x-0 bottom-0 bg-slate-200 sm:bg-transparent sm:p-0 p-4 sm:static sm:mt-5 mt-0 z-20">
              <Button
                onClick={() => handleAddToFavourite(data)}
                className="md:w-1/3 w-full sm:bg-slate-200 sm:border-0 border border-red-500 py-2.5 ro px-4"
              >
                <div className="flex items-center gap-3 justify-between w-full">
                  <span className="mt-1 text-sm font-semibold">
                    {!favourite.includes(data)
                      ? '+ Add to favourite'
                      : 'Remove from favourite'}
                  </span>
                  <div>
                    {favourite.includes(data) ? (
                      <MdOutlineFavorite className="fill-primary" size={24} />
                    ) : (
                      <MdOutlineFavoriteBorder
                        className="fill-primary"
                        size={24}
                      />
                    )}
                  </div>
                </div>
              </Button>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}

export default PeopleDetail
