/*
包含n个接口请求函数的模块
函数的返回值：promise对象
 */
import ajax from './ajax'
export const reqAddress= (geohash) => ajax('/position/${geohash}')
export const reqCategorys= () => ajax('/index_category')
export const reqShops= (longitude,latitude ) => ajax('/shops',{longitude,latitude})
export const reqSearchs= (keyword,geohash) => ajax('/search_shops',keyword,geohash)
export const reqCaptchas= () => ajax('/captcha')
export const reqLogins= (name,pwd,captcha) => ajax('/login_pwd',{name,pwd,captcha},'POST')
export const reqMobileCode= (phone) => ajax('/sendcode',{phone})
export const reqPhones= (phone,code) => ajax('/login_sms',{phone,code},'POST')
export const reqUsers= () => ajax('/userinfo')
export const reqLogouts= () => ajax('/logout')
