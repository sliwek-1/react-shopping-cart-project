import { Card, Button, Image } from "react-bootstrap"
import { useContext } from "react"
import { cartContext } from "../context/cartContext"

export function ShopItem({id, title, price, src, description}) { 
    const {items, setItems} = useContext(cartContext)

    function getItem(element) {
        if (items.findIndex(item => item.id === element.id) === -1) {
            setItems(prevItems => [...prevItems, element]);
        } else {
            console.log("Element już istnieje w tablicy.");
        }
    }

    return (
        <>
            <div key={crypto.randomUUID()} data-id={id} className="m-1">
                <Card className="d-flex" style={{width: "15vw", height: "50vh"}}>
                    <Card.Body className="d-flex align-items-center justify-content-around flex-column" style={{width: "15vw"}}>
                        <Image src={`/images/${src}`} style={{width: "13w", height: "25vh", objectFit: "cover"}} />
                        <Card.Title className="mt-4" style={{fontSize: "1rem"}}>
                            {title}
                        </Card.Title>
                        <Card.Title>
                            {price}/zł
                        </Card.Title>
                        <Card.Text className="text-muted" style={{fontSize: "0.8rem"}}>
                            {description}
                        </Card.Text>
                        {items.findIndex(item => item.id === id) === -1 ? 
                         <Button variant="primary" className="mt-3" style={{width: "12vw"}} onClick={() => getItem({id: id, title: title, price: price, src: src, quantity: 1})}>Add</Button>
                         :
                         <Button variant="primary" disabled>Przedmiot jest już w koszyku</Button>
                        }
                    </Card.Body>
                </Card>
            </div>
        </>
    )
} 