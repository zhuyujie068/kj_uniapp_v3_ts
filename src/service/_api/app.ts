import { post } from '../../utils/http/request';

export enum Api {
  TEST = '/jd-wit-ms/site/query', //测试接口
}

/**
 * 测试接口
 * @param params
 * @returns
 */
export function post_test(params?: any) {
  return post<any>(Api.TEST, params, { loading: true });
}