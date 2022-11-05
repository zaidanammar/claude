import Get from '../internals/api/get'

export const getPeoples = async ({ page }: { page: number }) => {
  const response = await Get({
    endpoint: `${process.env.REACT_APP_PUBLIC_API}/people`,
    params: {
      page,
    },
  })

  return {
    ...response,
    nextPage: page + 1,
    totalPage: Math.ceil(Number(response.count) / 10),
  }
}

export const getPeople = async ({ id }: { id: number }) => {
  const response = await Get({
    endpoint: `${process.env.REACT_APP_PUBLIC_API}/people/${id}`,
  })

  return {
    ...response,
  }
}
