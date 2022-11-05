import { useInfiniteQuery, useQuery } from '@tanstack/react-query'
import { getPeoples, getPeople } from '../services/people'

const useFetchPeoples = () =>
  useInfiniteQuery(
    ['peoples'],
    ({ pageParam = 1 }) => getPeoples({ page: pageParam }),
    {
      getNextPageParam: (pages: any) => {
        if (pages?.nextPage <= pages?.totalPage) {
          return pages.nextPage
        }
        return undefined
      },
      refetchOnWindowFocus: false,
    }
  )

const useFetchPeople = ({ id }: { id: number }) =>
  useQuery([`people-${id}`], () => getPeople({ id }), {
    refetchOnWindowFocus: false,
  })

export { useFetchPeoples, useFetchPeople }
