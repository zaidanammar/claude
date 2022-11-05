import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { IoIosArrowBack } from 'react-icons/io'

import Button from '../atoms/Button'
// import MSearchbar from '../molecules/MSearchbar'
// import { useFetchMovies } from '../../hooks/movie'
// import { useAppSelector } from '../../store/hooks'
// import { selectWishlist } from '../../store/wishlists/wishlistsSlice'

const TemplatesNavbar = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  //   const wishlists = useAppSelector(selectWishlist)

  const [searchInput, setSearchInput] = useState('')
  const [OpenSearchBar, setOpenSearchBar] = useState(false)

  //   const { data } = useFetchMovies({
  //     dependency: searchInput,
  //     search: searchInput,
  //     enabled: !(searchInput.length <= 0),
  //   })

  const handleSearch = (keyword: string) => {
    navigate({ pathname: '/movie', search: `s=${keyword}` })
  }

  return (
    <nav className="sm:h-[5.5rem] h-[5rem] w-full fixed inset-0 z-20 bg-slate-200 shadow-md">
      <section className="flex sm:gap-5 items-center h-full w-full container mx-auto">
        <div className="w-fit">
          <div className="sm:flex hidden">
            <h1
              role="presentation"
              onClick={() => navigate('/movie')}
              className="text-4xl font-bold text-primary cursor-pointer"
            >
              SWAPI
            </h1>
          </div>
          {pathname !== '/movie' && (
            <div className="sm:hidden flex -ml-4">
              <IoIosArrowBack size={32} onClick={() => navigate(-1)} />
            </div>
          )}
        </div>

        <div className="flex-1 flex justify-end sm:gap-5 gap-3">
          <div className="flex items-center">
            <div className="sm:flex hidden w-full h-full">
              <Button handleClick={() => navigate('/wishlist')}>
                <p className="ml-3">Favourite</p>

                {/* <ABadge badgeContent={wishlists.length} color="secondary">
                  <BsCart2 className="fill-white" size={18} />
                </ABadge> */}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </nav>
  )
}

export default TemplatesNavbar
