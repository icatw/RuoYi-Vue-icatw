import request from '@/utils/request'

// 查询二级学院列表
export function listCollege() {
  return request({
    url: '/club/college/list',
    method: 'get'
  })
}

// 查询二级学院详细
export function getCollege(cId) {
  return request({
    url: '/club/college/' + cId,
    method: 'get'
  })
}

// 新增二级学院
export function addCollege(data) {
  return request({
    url: '/club/college',
    method: 'post',
    data: data
  })
}

// 修改二级学院
export function updateCollege(data) {
  return request({
    url: '/club/college',
    method: 'put',
    data: data
  })
}

// 删除二级学院
export function delCollege(cId) {
  return request({
    url: '/club/college/' + cId,
    method: 'delete'
  })
}
