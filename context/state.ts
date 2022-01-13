import { proxy } from 'valtio'
import { LSCity } from '../lib/types'

const state: { selectedCity: LSCity | null; weatherInfo: any; showManage: boolean } = proxy({
    showManage: false,
    selectedCity: null,
    weatherInfo: {},
    toggleManage: function (t: boolean) {
        state.showManage = t
    }
})

export default state