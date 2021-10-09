import { proxy } from 'valtio'
import { City } from '../lib/types'

const state: { selectedCity: City | null; weatherInfo: any } = proxy({
    showManage: false,
    selectedCity: null,
    weatherInfo: {}
})

export default state