'use server'

import axios from 'axios'

const baseUrl = process.env.API_BASE_URL

export default async function getIndicators() {
    try {
        const response = await axios.get(`${baseUrl}/api/v1/indicators`, {
            headers: {
                Authorization: 'ApiToken ' + process.env.API_KEY,
            },
        })
        const data = response.data
        console.log(data)
        return data
    } catch (error) {
        console.error('Error:', error)
        return { errors: error.message }
    }
}
