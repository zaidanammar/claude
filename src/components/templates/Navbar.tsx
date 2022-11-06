import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { IoIosArrowBack } from 'react-icons/io'
import { MdOutlineFavoriteBorder } from 'react-icons/md'

import { useAppSelector } from '../../store/hooks'
import { selectFavourite } from '../../store/favourite/favouriteSlice'
import Badge from '../atoms/Badge'

const TemplatesNavbar = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const favourite = useAppSelector(selectFavourite)

  const exceptPath = ['/people', '/people/']

  return (
    <nav className="sm:h-[5.5rem] h-[5rem] w-full fixed inset-0 z-20 bg-slate-200 shadow-md">
      <section className="flex sm:gap-5 items-center h-full w-full container mx-auto">
        <div className="w-fit">
          <div className="flex items-center gap-1">
            {!exceptPath.includes(pathname) && (
              <div className="flex -ml-4">
                <IoIosArrowBack size={32} onClick={() => navigate('-1')} />
              </div>
            )}
            <h1
              role="presentation"
              onClick={() => navigate('/')}
              className="sm:text-4xl text-3xl font-bold text-primary cursor-pointer"
            >
              SWAPI
            </h1>
          </div>
        </div>

        <div className="flex-1 flex justify-end sm:gap-5 gap-3">
          <div className="flex items-center">
            <div className="flex w-full h-full">
              <Badge count={favourite.length}>
                <MdOutlineFavoriteBorder
                  className="fill-primary"
                  size={32}
                  onClick={() => navigate('/favourite')}
                />
              </Badge>
            </div>
          </div>
        </div>
      </section>
    </nav>
  )
}

export default TemplatesNavbar
