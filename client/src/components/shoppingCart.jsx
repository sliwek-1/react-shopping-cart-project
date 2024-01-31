import { Offcanvas, CloseButton, Button } from 'react-bootstrap'
import { ShoppingCartItems } from './shoppingCartItems'
import { ShoppingCartResult } from "./shoppingCartResult";
import { SetSummaryOrder } from './summaryOrderBtn';

export function ShoppingCart({handleCloseCanvas, show, items}) {

    return (
        <>
            <Offcanvas show={show} placement="end" style={{width: "45vw"}}>
                <Offcanvas.Header>
                    <Offcanvas.Title>
                        Koszyk
                    </Offcanvas.Title>
                    <CloseButton onClick={handleCloseCanvas} />
                </Offcanvas.Header>
                <Offcanvas.Body>
                        <ShoppingCartItems items={items}/>
                            <div style={{position: 'absolute', bottom: "5%", left: "5%",zIndex: "1"}}>
                            <ShoppingCartResult items={items} />
                        </div>
                        <SetSummaryOrder items={items} />
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}