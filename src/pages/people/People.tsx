import React from 'react'
import InfiniteScroll from 'react-infinite-scroller'
import Loading from '../../components/atoms/Loading'
import Card from '../../components/molecules/card'

import { useFetchPeoples } from '../../hooks/people'
import type { People as PeopleType } from '../../types/people'

const People = () => {
  const { data, isLoading, hasNextPage, fetchNextPage } = useFetchPeoples()

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
              page?.results?.map((people: PeopleType) => (
                <Card people={people} key={people.name} />
              ))
            )}
        </InfiniteScroll>
      )}
    </main>
  )
}

export default People
