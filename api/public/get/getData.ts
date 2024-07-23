import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

export type GetDataResponse = {
  completed: boolean
  id: number
  title: string
  useId: number
}

export const getData = () =>
  axios({
    method: 'GET',
    url: `https://jsonplaceholder.typicode.com/todos`,
  }).then(({ data }) => data)

export const useGetData = () =>
  useQuery<GetDataResponse>({
    queryKey: ['getData'],
    queryFn: getData,
  })
