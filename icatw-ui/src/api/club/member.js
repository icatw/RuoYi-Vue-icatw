import request from '@/utils/request'

// 查询社团会员列表
export function listMember(query) {
  return request({
    url: '/club/member/list',
    method: 'get',
    params: query
  })
}

// 查询社团会员详细
export function getMember(id) {
  return request({
    url: '/club/member/' + id,
    method: 'get'
  })
}

// 新增社团会员
export function addMember(data) {
  return request({
    url: '/club/member',
    method: 'post',
    data: data
  })
}

// 修改社团会员
export function updateMember(data) {
  return request({
    url: '/club/member',
    method: 'put',
    data: data
  })
}

// 删除社团会员
export function delMember(id) {
  return request({
    url: '/club/member/' + id,
    method: 'delete'
  })
}
