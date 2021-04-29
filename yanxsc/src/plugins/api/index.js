import axios from '@/plugins/axios'



export const requestLogin = ({mobile,pwd})=>{
    // url 参数名
    // query 相当于拼接url，？a=b&c=d
    // 1. 拼字符串 url: 'small4/user/m/login?deviceId=007&deviceName=monkey&mobile='+mobile+'&pwd='+pwd,
    // 2. params 对象
    return axios.request({
        url: 'small4/user/m/login?deviceId=007&deviceName=monkey',
        method:'post',
        params: {mobile,pwd}
    })
}





// export const requestRegister = (obj)=>{
//     // url 参数名
//     // query 相当于拼接url，？a=b&c=d
//     // 1. 拼字符串 url: 'small4/user/m/login?deviceId=007&deviceName=monkey&mobile='+mobile+'&pwd='+pwd,
//     // 2. params 对象
//     return axios.request({
//         url: 'small4/user/m/login?deviceId=007&deviceName=monkey',
//         method:'post',
//         params: obj
//     })

// }
export  default {requestLogin}
