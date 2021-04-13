import Mock from 'mockjs'

Mock.mock(
    '/api/login',
    'post',
    (req) => {
        const { password, username } = JSON.parse(req.body)
        if (username === 'admin' && password === '123456') {
            return {
                code: 200,
                token: 'y_admin'
            }
        } else {
            return {
                success: false
            }
        }
    }
)