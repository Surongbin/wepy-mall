/**
 * Created by cooky on 2018/7/9.
 */
import {wxRequest} from './base.js';
const API_DOMAIN = 'https://www.meitu.com/api/';
export default {
    // list添加参数check_client，用于显示当前平台销售的商品
    list (params = {}) {
        return wxRequest(params, API_DOMAIN + 'cart/get_list.json');
    },
    add (params) {
        return wxRequest(params, API_DOMAIN + 'cart/add.json', 'post');
    },
    delete (params) {
        return wxRequest(params, API_DOMAIN + 'cart/del.json', 'post');
    },
    edit (params) {
        return wxRequest(params, API_DOMAIN + 'cart/edit.json', 'post');
    },
    checkout (params) {
        return wxRequest(params, API_DOMAIN + 'cart/checkout.json', 'post');
    },
    checkoutList (params) {
        return wxRequest(params, API_DOMAIN + 'cart/checkout_list.json');
    }
};
