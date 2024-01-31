import { useState, useEffect } from "react"

export function ShoppingCartResult({items}) {

    const [result, setResult] = useState([])

    useEffect(() => {
        const updatedArray = items.map((item) => item.price * item.quantity)
        setResult(updatedArray)
    },[items])

    return (
        <>
            <div>
                <h5>
                    SUMA: {result.length > 0 ? result.reduce((a, b) => a + b).toFixed(2) + "/zł" : <p>0</p>}
                </h5>
            </div>
        </>
    )
}