import axios from "axios";
axios.defaults.baseURL = '/';

const service = axios.create({
    timeout: 8000,
    withCredentials: true,
    headers: {
        'Content-type': 'application/x-www-form-urlencoded'
    }
})


//  置请求拦截器：----在项目中发请求（请求没有发出去）可以做一些事情
service.interceptors.request.use(req => {
    // let token = localStorage.getItem('token');
    // token && (req.headers.Authoriztion = token);
    return req
}, error => {
    return Promise.reject(error)
})

// 设置响应拦截器
service.interceptors.response.use(res => {
    return res.data; //将主体内容返回  axios.get().then(result=>{拿到的就是响应主体})
}, error => {
    return Promise.reject(error)

})
export default service;

