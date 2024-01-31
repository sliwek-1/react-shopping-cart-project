import { Table } from "react-bootstrap"
import { ItemSummary } from "./itemSummary"

export function OrderSummaryContent({items}) {
    return (
        <>
            <Table striped bordered hover responsive style={{width: "35vw"}}>
                <thead>
                    <tr>
                        <th>Lp.</th>
                        <th>Zdjęcie</th>
                        <th>Tytuł</th>
                        <th>Cena</th>
                        <th>ilość</th>
                        <th>Cena Ogółem</th>
                    </tr>    
                </thead>
                <tbody>
                    {items.map((item , i) => {
                        return <ItemSummary i={i} title={item.title} src={item.src} price={item.price} quantity={item.quantity}/>
                    })}
                </tbody>
            </Table>
        </>
    )
}