import { Form, Input, Button, Layout, Menu } from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

const components = [Form, Input, Button, Layout, Menu]


export function setupAntd(app) {
    components.forEach(component => {
        app.use(component)
    })
}