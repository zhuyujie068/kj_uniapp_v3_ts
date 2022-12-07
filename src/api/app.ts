import { post,get } from '../utils/http/request';

export enum Api {
  TEST = '/jd-wit-ms/site/query', //测试接口
  GET_TEST='/sys-auth/user/current'
}

/**
 * 测试接口
 */
export function post_test(params?: any) {
  return post<any>(Api.TEST, params, { loading: true });
}

export function get_test(params?: any) {
  return get<any>(Api.GET_TEST, params, { loading: true });
}