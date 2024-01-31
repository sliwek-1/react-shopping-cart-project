import { useState } from "react"
import { Card, Image, CloseButton, Button } from "react-bootstrap"

export function CartItem({item, deleteFromCart, setItems, increaseQuantity, decreaseQuantity}){
    return (
        <>
            <div key={crypto.randomUUID()} className="mb-2">
                <Card>
                    <Card.Body className="d-flex justify-content-between align-items-center">
                        <Image src={`/images/${item.src}`} style={{width: "7vh", height: "7vh"}}/>
                        <div className="d-flex justify-content-around align-items-center" style={{width: "30vw"}}>
                            <div className="d-flex" style={{width: "20vw"}}>
                                <Card.Title className="m-4">
                                    {item.title} 
                                </Card.Title>
                                <Card.Title className="text-muted m-4">
                                    {item.price}/zł
                                </Card.Title>
                            </div>
                            <div  style={{width: "10vw"}}>
                                {item.quantity == 1 ? 
                                <Button variant="primary" onClick={() => decreaseQuantity(item.id)} className="opacity-0">-</Button>
                                 :
                                <Button variant="primary" onClick={() => decreaseQuantity(item.id)} className="opacity-100">-</Button>
                                }
                                <span className="p-3">{item.quantity}</span>
                                <Button variant="primary" onClick={() => increaseQuantity(item.id)}>+</Button>
                            </div>
                        </div>
                        <CloseButton className="danger" onClick={() => deleteFromCart(item.id)}></CloseButton>
                    </Card.Body>
                </Card>
            </div>
        </>
    )
}