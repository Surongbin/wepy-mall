/**
 * Created by cooky on 2018/7/3.
 */
import wepy from 'wepy';

const wxRequest = (params = {}, url, method = 'GET') => {
  let data = params || {};
  return new Promise((resolve, reject) => {
    return wepy.request({
      url: url,
      method: method,
      data: data,
      header: { 'Content-Type': 'application/json' },
      success: res => {
        resolve(res.data);
      },
      fail: res => {
        reject(res);
      }
    });
  })
};


module.exports = {
  wxRequest
}
