import { proxy } from 'valtio'

const state = proxy({
    showManage: false
})

export default state