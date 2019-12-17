/*
 * 这里数据请求的唯一入口
 */
 import http from '@/utils/http'
 //
 const getDataAll = data => http.get('',{params:data})

export default {
	getDataAll
}
