import { proxy } from 'valtio'
import { LSCity } from '../lib/types'

const state: { selectedCity: LSCity | null; weatherInfo: any } = proxy({
    showManage: false,
    selectedCity: null,
    weatherInfo: {}
})

export default state