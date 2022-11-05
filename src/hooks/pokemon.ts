import { useInfiniteQuery, useQuery } from '@tanstack/react-query'
import { getCharacter, getCharacters } from '../services/pokemon'

const useFetchCharacters = () =>
  useInfiniteQuery(
    ['pokemon'],
    ({ pageParam = 1 }) => getCharacters({ page: pageParam }),
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

const useFetchCharacter = ({ id }: { id: number }) =>
  useQuery([`pokemon-${id}`], () => getCharacter({ id }), {
    refetchOnWindowFocus: false,
  })

export { useFetchCharacters, useFetchCharacter }
