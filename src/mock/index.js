import { message } from 'ant-design-vue/es'
import instance from '../api/request'

export const Login = res => {
    return instance({
        url: '/login',
        method: 'POST',
        data: res
    }).then(response => {
        if (response.data.success) {
            message.success("登录成功！")
        } else {
            message.error("登陆失败！")
        }
    })
}

export default { Login }