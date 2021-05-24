const app = getApp();

// 定义网络请求API地址
const baseURL = "https://wwww.xh-hjy.top/";

// 封装请求
const http = ({url, data, method, ...other} = {}) => {
    wx.showLoading({
        title: `加载中...`
    });
    return new Promise((resolve, reject) => {
        wx.request({
            url: baseURL + url,
            data,
            method,
            header: getHeader(),
            ...other,
            complete: (res) => {
               wx.hideLoading();
               // 根据状态码处理结果
               if(res.statusCode === 200){
                   resolve(res);
               } else{
                   // 获取后台返回报错信息
                   let title = res.data.err_msg
                   // 调用全局toast方法
                   showToast(title)
                   reject(res);
               }
            }
        })
    });
}

const showToast = (title: string) => {
    wx.showToast({
        title,
        icon: 'none',
        duration: 1500,
        mask: true
    })
}

const getHeader = () => {
    // 判断登录token是否存在
    if(wx.getStorageSync('token')){
        // 获取token并设置请求头
        const token = wx.getStorageSync('token');
        let auth = {
            'token': token
        }
        return auth;
    }
}

enum Method {
    GET = "GET",
    POST = "POST"
}

interface FetchOptions {
    url: string;
    data: any;
    method: Method;
}

// 实际请求后端时的方法
export const fetch = (options: Partial<FetchOptions>) => {
    return http({
        url: options.url,
        data: options.data,
        method: options.method || `POST`
    })
}
