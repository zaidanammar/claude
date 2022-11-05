import React from 'react'
import InfiniteScroll from 'react-infinite-scroller'
import { useNavigate } from 'react-router-dom'
import Loading from '../../components/atoms/Loading'

import { useFetchCharacters } from '../../hooks/pokemon'
import type { People } from '../../types/people'

const Pokemon = () => {
  const navigate = useNavigate()
  const { data, isLoading, hasNextPage, fetchNextPage } = useFetchCharacters()

  return (
    <main className="pt-4">
      {isLoading && (
        <div className="flex justify-center">
          <Loading />
        </div>
      )}
      {data && (
        <InfiniteScroll
          loadMore={() => fetchNextPage()}
          hasMore={hasNextPage}
          loader={
            <div className="flex justify-center">
              <Loading />
            </div>
          }
        >
          {data &&
            data?.pages?.map((page) =>
              page?.results?.map((people: People) => (
                <div
                  key={people.name}
                  className="bg-white border rounded-md shadow my-5 p-5 font-semibold cursor-pointer"
                  onClick={() => navigate(`/people/${people.url.slice(29)}`)}
                  role="presentation"
                >
                  <p>{people.name}</p>
                </div>
              ))
            )}
        </InfiniteScroll>
      )}
    </main>
  )
}

export default Pokemon
