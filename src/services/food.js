import { request, config } from 'utils'

const { api } = config
const { food } = api

export async function query (params) {
  return request({
    url: food,
    method: 'get',
    data: params,
  })
}
