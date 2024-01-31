import { useEffect, useState } from "react"
import { OrderSummaryContent } from "../components/orderSummaryContent"
import { ShoppingCartResult } from "../components/shoppingCartResult"
import { SummaryForm } from "../components/summaryForm"

export function SummaryOrder() {

    const [data, setData] = useState([])

    useEffect(() => {
        const getSummaryData = async () => {
            try {   
                let request = await fetch('http://localhost:3000/get-summary')

                let response = await request.json()
                
                setData(response[0])
            } catch (error) {
                console.log(error)
            }
        }

        getSummaryData()
    }, [])

    return (
        <>
            <div className="d-flex" style={{width: "100vw", height: "85vh"}}>
                <div className="d-flex flex-column justify-content-start align-items-center mt-3" style={{width: "50vw", height: "85vh"}}>
                    <h2>Podsumowanie</h2>
                    <OrderSummaryContent items={data} />
                    <ShoppingCartResult  items={data} />
                </div>
                <div className="d-flex flex-column" style={{width: "50vw", height: "85vh"}}>
                    <SummaryForm />
                </div>
            </div>
        </>
    )
}