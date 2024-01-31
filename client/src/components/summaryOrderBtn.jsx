import { Button, Nav } from "react-bootstrap"

export function SetSummaryOrder({items}) {

    async function handleSummaryFetch() {
        try {
            let request = await fetch('http://localhost:3000/catch-payment',{
                method: 'post',
                body: JSON.stringify(items),
                headers: {
                    'Content-Type': 'application/json'
                }
            })


            let response = await request.json()
            console.log(response)

        } catch(error) {
            console.log(error)
        }
    }

    return (
        <>
            {items.length > 0 ?<Nav>
                                   <Nav.Link className="p-3" href="/summary-order" variant="success" style={{position: 'absolute', bottom: "5%", right: "5%",zIndex: "1", border: "1px solid royalblue", borderRadius: "10px"}} onClick={handleSummaryFetch}>Podsumowanie</Nav.Link>
                               </Nav>
             : ''}
        </>
    )
}