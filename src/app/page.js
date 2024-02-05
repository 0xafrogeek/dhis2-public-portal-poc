'use client'

import { useEffect, useState, useTransition } from 'react'
import getIndicators from './actions'

export default function Indicators() {
    const [data, setData] = useState(null)
    const [isPending, startTransition] = useTransition()

    useEffect(() => {
        onGetIndicators()
    }, [])

    async function onGetIndicators() {
        startTransition(async () => {
            const response = await getIndicators()
            console.log(response) // Log the response to the console
            if (response.data && response.data.indicatorGroups) {
                setData(response.data.indicatorGroups)
            } else {
                console.error('Unexpected data structure:', response)
            }
        })
    }

    if (isPending) {
        return <div>Loading...</div>
    }

    if (!data) {
        return null
    }

    return (
        <div>
            <button onClick={onGetIndicators}>Get Indicators</button>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Display Name</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((indicator, index) => (
                        <tr key={index}>
                            <td>{indicator.id}</td>
                            <td>{indicator.displayName}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
