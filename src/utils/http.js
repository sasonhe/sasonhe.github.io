import axios from 'axios'
import QS from 'qs'

/*
 * 根据环境变量区分接口的默认地址
 */
axios.defaults.baseURL = process.env.VUE_APP_BASE_API;
/*
 * 设置超时时间和跨域是否允许携带凭证
 */
axios.defaults.timeout = 10000;
axios.defaults.withCredentials = true;
/*
 * 设置请求传递数据的格式（看服务器要求什么格式）
 * x-www-form-urlencoded
 */
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
axios.defaults.transformRequest = data => QS.stringify(data);

/*
 * 设置请求拦截器
 * 客户端发送请求 - > [请求拦截器] - > 服务器
 * TOKEN校验（JWT）：接收服务器返回的token，存储到vuex/本地存储中，每一次向服务器发请求，我们应该把token带上
 */
axios.interceptors.request.use(config => {
	return config;
}, error => {
	return Promise.reject(error);
});

/*
 * 响应拦截器
 * 服务器返回信息  -> [拦截的统一处理] -> 客户端JS获取到信息
 */
axios.interceptors.response.use(
  response => {
    const {data} = response;
    return data
  },
  error => {
  	let { response } = error;
  	if (response) {
  		//=>服务器最起码返回结果了
  		switch (response.status) {
  			case 401: //=>权限
  				break;
  			case 403: //=>服务器拒绝执行（token过期）
  				break;
  			case 404: //=>找不到页面

  				break;
				case 500: //=>找不到页面

  				break;
  		}
			return response;
  	} else {
  		//=>服务器连结果都没有返回
  		if (!window.navigator.onLine) {
  			// 断网处理：可以跳转到断网页面
        alert('未连接网络')
  			return;
  		}
  		return Promise.reject(error);
  	}
  });

export default axios;
