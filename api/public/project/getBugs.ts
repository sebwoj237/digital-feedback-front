import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

export type GetDataResponse = {
  postId: number
  id: number
  name: string
  email: string
  body: string
}

export const getBugs = ({ queryKey }: any) => {
  const [_key, { id }] = queryKey
  return axios({
    method: 'GET',
    url: `https://jsonplaceholder.typicode.com/posts/${id}/comments`,
  }).then(({ data }) => data)
}

export const useGetBugs = (id: number) =>
  useQuery<GetDataResponse[]>({
    queryKey: ['getBugs', { id }],
    queryFn: getBugs,
  })
