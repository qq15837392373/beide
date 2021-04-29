import axios from 'axios'
// import { config } from 'vue/types/umd'

let instance = new axios.create({
    baseURL: 'https://api.it120.cc/', // 配置基础url
    timeout:5000,
})

//请求拦截
instance.interceptors.request.use((config)=>{
    return config
},(error)=>{
    console.log(error);
})


//响应拦截
instance.interceptors.response.use((res)=>{
 
    let _data = res.data;
    let _resobj = {
        // key值有特殊符号，可以直接定义为字符串
        '-1': '服务器内部错误',
        403: '禁止访问'
    }
 
    if(_data.code!==0){
        alert(_resobj[_data.code])
    }else{
         return _data.data
    }
},(error)=>{
    console.log(error);
})

export default instance