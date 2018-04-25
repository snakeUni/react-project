/**
 * 全局配置文件
 */
let baseURL; 
let imgUrl = '//cangdu.org:8001/img/';
if(process.env.NODE_ENV === 'development'){
  baseURL = '/timodev';
}else{
  baseURL = '/timopro';
}


export default {imgUrl, baseURL}