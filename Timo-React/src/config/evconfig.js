/**
 * 全局配置文件
 */
let baseURL; 
let imgUrl = '//cangdu.org:8001/img/';
if(process.env.NODE_ENV === 'development'){
  baseURL = '/api/timo';
}else{
  baseURL = '/api/timo';
}


export default {imgUrl, baseURL}