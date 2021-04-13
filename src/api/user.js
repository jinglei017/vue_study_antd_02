import instance from '../api/request'

export const Login = res => {
    return instance({
        url: '/login',
        method: 'POST',
        data: res
    })
}

export default { Login }