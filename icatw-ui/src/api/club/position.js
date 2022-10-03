import request from '@/utils/request'

// 查询职位列表
export function listPosition() {
  return request({
    url: '/club/position/list',
    method: 'get'
  })
}

// 查询职位详细
export function getPosition(pId) {
  return request({
    url: '/club/position/' + pId,
    method: 'get'
  })
}

// 新增职位
export function addPosition(data) {
  return request({
    url: '/club/position',
    method: 'post',
    data: data
  })
}

// 修改职位
export function updatePosition(data) {
  return request({
    url: '/club/position',
    method: 'put',
    data: data
  })
}

// 删除职位
export function delPosition(pId) {
  return request({
    url: '/club/position/' + pId,
    method: 'delete'
  })
}
