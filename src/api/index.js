/**
 * Created by cooky on 2018/7/3.
 */
import {wxRequest} from './base.js';
const API_DOMAIN = 'https://www.meitu.com/api/';
export default {
  banners (params = {}) {
    return wxRequest(params, API_DOMAIN + 'block/banner_list.json?block_alias=small_shop');
  },
  goods (params) {
    return wxRequest(params, API_DOMAIN + 'goods/small_get_list.json');
  }
}
