import axios from '@/plugins/axios'

/**
 * 首页banner数据
 * @returns {*|ClientHttp2Stream|http.ClientRequest}
 */
//  small4/user/shipping-address/detail
export const querybanner = ()=>{
    return axios.request({
        url: 'small4/banner/list',
        method:'get'
    })

}
export const querykan = ()=>{
    return axios.request({
        url: 'small4/shop/goods/kanjia/list',
        method:'get'
    })

}



export const queryjxt = ()=>{
    return axios.request({
        url: 'small4/cms/news/list',
        method:'get'
    })

}

//文章详情
export const querydetail = (id)=>{
    return axios.request({
        url: 'small4/cms/news/detail',
        method:'get',
        params:{id}
    })

}


// https://api.it120.cc/small4/shop/goods/list


export const queryshopfen = ()=>{
    return axios.request({
        url: 'small4/shop/goods/category/all',
        method:'get',
    })

}

export  default {querybanner,querykan,queryjxt,querydetail,queryshopfen}



