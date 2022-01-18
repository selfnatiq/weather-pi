export const isDev = false // process.env.NODE_ENV === 'development'
export const api = "https://api.weatherbit.io/v2.0"
export const API_KEY = process.env.NEXT_PUBLIC_API_KEY
export const backend = process.env.NEXT_PUBLIC_BACKEND
export const isLocal = (v: number | undefined) => v === 999